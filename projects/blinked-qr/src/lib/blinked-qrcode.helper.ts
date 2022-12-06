import { AsyncSubject } from 'rxjs';

import { Templates } from './blinked-qrcode.templates'
import { Options } from './blinked-qrcode.options'
import QRCodeStyling from './qr-styling/qr-styling';

/**
 * drawQrcode
 * @param config 
 * @param container 
 * @returns 
 */
export function drawQrcode(config: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any): AsyncSubject<any> {

    const subject = new AsyncSubject();
    const element = document.createElement("div");

    /**
     * QRCODE_NONE_FRAME
     * @returns 
     */
    const QRCODE_NONE_FRAME = () => {
        if (config?.hasOwnProperty('frameOptions')) {
            return false;
        } else {
            // removeChild
            while (container?.firstChild) {
                container.removeChild(container.lastChild);
            }
            const CR = new QRCodeStyling(config as Options);
            // append to container
            CR.append(container);
            return true;
        }
    }

    /**
     * ADD_FRAME_SVG_TO_ELEMENT
     * @returns 
     */
    const ADD_FRAME_SVG_TO_ELEMENT = () => {
        const http = fetch(`https://raw.githubusercontent.com/salahatwa/blinked-qr/master/frames/${config?.frameOptions?.style ?? 'style1'}.svg`, { method: 'GET' })
        return new Promise((resolve, reject) => {
            http.then(response => response.text()).then(result => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(result, "image/svg+xml");
                element.appendChild(doc.documentElement);
                resolve(result);
            }).catch(error => {
                console.error(error);
                reject(error);
            });
        });
    }

    /**
     * UPDATE_POSITION_QRCODE_ON_FRAME
     * @returns 
     */
    const UPDATE_POSITION_QRCODE_ON_FRAME = () => {
        const addsvg = element.querySelector('.addsvg');
        addsvg?.setAttribute("transform", `translate(${config?.frameOptions?.x ?? 50},${config?.frameOptions?.y ?? 50})`);
        return addsvg as HTMLElement;
    }

    /**
     * CREATE_QRCODE_INTO_FRAME
     * @param addsvg 
     * @returns 
     */
    const CREATE_QRCODE_INTO_FRAME = (addsvg: HTMLElement) => {
        const defaultConfig = () => {
            let deep = config && JSON.parse(JSON.stringify(config)); // deep
            deep = { ...deep, type: 'svg' };
            delete deep.frameOptions;
            delete deep.template;
            return deep;
        }
        // removeChild
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        const CR = new QRCodeStyling(defaultConfig() as Options);
        return CR?._svgDrawingPromise?.then(() => {
            CR.append(addsvg);
        }).catch(error => console.error(error))
    }

    /**
     * QRCODE_TYPE_SVG
     * @returns 
     */
    const QRCODE_TYPE_SVG = () => {
        if (config?.type === 'svg') {
            UPDATE_SIZE_SVG();
            container.appendChild(element);
            return true;
        }
        return false;
    }

    /**
     * CREATE_CANVAS_WITH_SIZE
     * @returns 
     */
    const CREATE_CANVAS_WITH_SIZE = () => {
        const canvas = document.createElement('canvas');
        canvas.height = config?.frameOptions?.height ?? 300;
        canvas.width = config?.frameOptions?.width ?? 300;
        container.appendChild(canvas);
        return canvas;
    }

    /**
     * ELEMENT_CONVERT_TO_BASE64
     * @param s1 
     * @returns 
     */
    const ELEMENT_CONVERT_TO_BASE64 = (s1: HTMLElement) => {
        let b64 = "data:image/svg+xml;base64,";
        const xml = new XMLSerializer().serializeToString(s1);
        return b64 += xml && btoa(unescape(encodeURIComponent(xml)));
    }

    /**
     * UPDATE_SIZE_SVG
     * @returns 
     */
    const UPDATE_SIZE_SVG = () => {
        const s1 = element.querySelector(`#${config?.frameOptions?.style ?? 'style1'}-svg`);
        s1?.setAttribute('height', `${config?.frameOptions?.height ?? 300}px`);
        s1?.setAttribute('width', `${config?.frameOptions?.width ?? 300}px`);
        return s1 as HTMLElement;
    }

    /**
     * CREATE_IMAGE
     */
    const CREATE_IMAGE = () => {
        const img = new Image();
        const ctx = CREATE_CANVAS_WITH_SIZE().getContext("2d");
        img.onload = function () {
            ctx?.drawImage(img, 0, 0);
        };
        img.src = ELEMENT_CONVERT_TO_BASE64(UPDATE_SIZE_SVG());
    }

    /**
     * MAIN
     */
    (async function () {
        if (QRCODE_NONE_FRAME()) {
            subject.next({ config, container });
            subject.complete();
            return // Mode qrcode basic
        } else {
            await ADD_FRAME_SVG_TO_ELEMENT();
            await CREATE_QRCODE_INTO_FRAME(UPDATE_POSITION_QRCODE_ON_FRAME());
            if (QRCODE_TYPE_SVG()) {
                // Mode qrcode + frame type svg
                subject.next({ config, container });
                subject.complete();
            } else {
                // Mode qrcode + frame type canvas
                CREATE_IMAGE();
                subject.next({ config, container });
                subject.complete();
            }
        }
    })();

    return subject;
}


/**
 * defaultTemplate
 * @param config 
 * @returns 
 */
export const defaultTemplate = (config?: Options): Options => {
    const deep = config && JSON.parse(JSON.stringify(config));
    return config?.template ? { ...Templates(config?.template?.toLocaleLowerCase()), ...deep } : deep;
};

/**
 * deepUpdate
 * @param config 
 * @param configUpdate 
 * @returns 
 */
export const deepUpdate = async (config: Options, configUpdate: Options): Promise<Options> => {
    const origin = config && JSON.parse(JSON.stringify(config));
    let clone = { ...origin, ...configUpdate }
    const keys = ['frameOptions', 'qrOptions', 'imageOptions', 'dotsOptions', 'cornersSquareOptions', 'cornersDotOptions', 'backgroundOptions'];
    for await (const key of keys) {
        if (configUpdate?.hasOwnProperty(key)) {
            clone = {
                ...clone,
                [key]: {
                    ...origin?.[key],
                    ...(configUpdate as any)?.[key],
                }
            }
        }
    }
    return clone;
};
