export interface UnknownObject {
    [key: string]: any;
}
export declare type DotType = "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded";
export declare type CornerDotType = "dot" | "square";
export declare type CornerSquareType = "dot" | "square" | "extra-rounded";
export declare type GradientType = "radial" | "linear";
export declare type DrawType = "canvas" | "svg";
export declare type ShapeType = "square" | "circle";
export declare type TemplateType = "classic" | "ocean" | "sunflower" | "luxury" | "bitcoin" | "starbucks" | "angular" | "facebook" | "jungle" | "green" | "sky" | "mosaic" | "coffee" | "vintage" | "stamp" | "chess";
// Array.from(Array(500).keys()).map(v => `"style${v + 1}"`).join(' | ')
export declare type FrameStyle = "style1" | "style2" | "style3" | "style4" | "style5" | "style6" | "style7" | "style8" | "style9" | "style10" | "style11" | "style12" | "style13" | "style14" | "style15" | "style16" | "style17" | "style18" | "style19" | "style20" | "style21" | "style22" | "style23" | "style24" | "style25" | "style26" | "style27" | "style28" | "style29" | "style30" | "style31" | "style32" | "style33" | "style34" | "style35" | "style36" | "style37" | "style38" | "style39" | "style40" | "style41" | "style42" | "style43" | "style44" | "style45" | "style46" | "style47" | "style48" | "style49" | "style50" | "style51" | "style52" | "style53" | "style54" | "style55" | "style56" | "style57" | "style58" | "style59" | "style60" | "style61" | "style62" | "style63" | "style64" | "style65" | "style66" | "style67" | "style68" | "style69" | "style70" | "style71" | "style72" | "style73" | "style74" | "style75" | "style76" | "style77" | "style78" | "style79" | "style80" | "style81" | "style82" | "style83" | "style84" | "style85" | "style86" | "style87" | "style88" | "style89" | "style90" | "style91" | "style92" | "style93" | "style94" | "style95" | "style96" | "style97" | "style98" | "style99" | "style100" | "style101" | "style102" | "style103" | "style104" | "style105" | "style106" | "style107" | "style108" | "style109" | "style110" | "style111" | "style112" | "style113" | "style114" | "style115" | "style116" | "style117" | "style118" | "style119" | "style120" | "style121" | "style122" | "style123" | "style124" | "style125" | "style126" | "style127" | "style128" | "style129" | "style130" | "style131" | "style132" | "style133" | "style134" | "style135" | "style136" | "style137" | "style138" | "style139" | "style140" | "style141" | "style142" | "style143" | "style144" | "style145" | "style146" | "style147" | "style148" | "style149" | "style150" | "style151" | "style152" | "style153" | "style154" | "style155" | "style156" | "style157" | "style158" | "style159" | "style160" | "style161" | "style162" | "style163" | "style164" | "style165" | "style166" | "style167" | "style168" | "style169" | "style170" | "style171" | "style172" | "style173" | "style174" | "style175" | "style176" | "style177" | "style178" | "style179" | "style180" | "style181" | "style182" | "style183" | "style184" | "style185" | "style186" | "style187" | "style188" | "style189" | "style190" | "style191" | "style192" | "style193" | "style194" | "style195" | "style196" | "style197" | "style198" | "style199" | "style200" | "style201" | "style202" | "style203" | "style204" | "style205" | "style206" | "style207" | "style208" | "style209" | "style210" | "style211" | "style212" | "style213" | "style214" | "style215" | "style216" | "style217" | "style218" | "style219" | "style220" | "style221" | "style222" | "style223" | "style224" | "style225" | "style226" | "style227" | "style228" | "style229" | "style230" | "style231" | "style232" | "style233" | "style234" | "style235" | "style236" | "style237" | "style238" | "style239" | "style240" | "style241" | "style242" | "style243" | "style244" | "style245" | "style246" | "style247" | "style248" | "style249" | "style250" | "style251" | "style252" | "style253" | "style254" | "style255" | "style256" | "style257" | "style258" | "style259" | "style260" | "style261" | "style262" | "style263" | "style264" | "style265" | "style266" | "style267" | "style268" | "style269" | "style270" | "style271" | "style272" | "style273" | "style274" | "style275" | "style276" | "style277" | "style278" | "style279" | "style280" | "style281" | "style282" | "style283" | "style284" | "style285" | "style286" | "style287" | "style288" | "style289" | "style290" | "style291" | "style292" | "style293" | "style294" | "style295" | "style296" | "style297" | "style298" | "style299" | "style300" | "style301" | "style302" | "style303" | "style304" | "style305" | "style306" | "style307" | "style308" | "style309" | "style310" | "style311" | "style312" | "style313" | "style314" | "style315" | "style316" | "style317" | "style318" | "style319" | "style320" | "style321" | "style322" | "style323" | "style324" | "style325" | "style326" | "style327" | "style328" | "style329" | "style330" | "style331" | "style332" | "style333" | "style334" | "style335" | "style336" | "style337" | "style338" | "style339" | "style340" | "style341" | "style342" | "style343" | "style344" | "style345" | "style346" | "style347" | "style348" | "style349" | "style350" | "style351" | "style352" | "style353" | "style354" | "style355" | "style356" | "style357" | "style358" | "style359" | "style360" | "style361" | "style362" | "style363" | "style364" | "style365" | "style366" | "style367" | "style368" | "style369" | "style370" | "style371" | "style372" | "style373" | "style374" | "style375" | "style376" | "style377" | "style378" | "style379" | "style380" | "style381" | "style382" | "style383" | "style384" | "style385" | "style386" | "style387" | "style388" | "style389" | "style390" | "style391" | "style392" | "style393" | "style394" | "style395" | "style396" | "style397" | "style398" | "style399" | "style400" | "style401" | "style402" | "style403" | "style404" | "style405" | "style406" | "style407" | "style408" | "style409" | "style410" | "style411" | "style412" | "style413" | "style414" | "style415" | "style416" | "style417" | "style418" | "style419" | "style420" | "style421" | "style422" | "style423" | "style424" | "style425" | "style426" | "style427" | "style428" | "style429" | "style430" | "style431" | "style432" | "style433" | "style434" | "style435" | "style436" | "style437" | "style438" | "style439" | "style440" | "style441" | "style442" | "style443" | "style444" | "style445" | "style446" | "style447" | "style448" | "style449" | "style450" | "style451" | "style452" | "style453" | "style454" | "style455" | "style456" | "style457" | "style458" | "style459" | "style460" | "style461" | "style462" | "style463" | "style464" | "style465" | "style466" | "style467" | "style468" | "style469" | "style470" | "style471" | "style472" | "style473" | "style474" | "style475" | "style476" | "style477" | "style478" | "style479" | "style480" | "style481" | "style482" | "style483" | "style484" | "style485" | "style486" | "style487" | "style488" | "style489" | "style490" | "style491" | "style492" | "style493" | "style494" | "style495" | "style496" | "style497" | "style498" | "style499" | "style500";
export declare type Gradient = {
    type: GradientType;
    rotation?: number;
    colorStops: {
        offset: number;
        color: string;
    }[];
};
export interface DotTypes {
    [key: string]: DotType;
}
export interface GradientTypes {
    [key: string]: GradientType;
}
export interface CornerDotTypes {
    [key: string]: CornerDotType;
}
export interface CornerSquareTypes {
    [key: string]: CornerSquareType;
}
export interface DrawTypes {
    [key: string]: DrawType;
}
export interface ShapeTypes {
    [key: string]: ShapeType;
}
export declare type TypeNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;
export declare type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
export declare type Mode = "Numeric" | "Alphanumeric" | "Byte" | "Kanji";
export interface QRCode {
    addData(data: string, mode?: Mode): void;
    make(): void;
    getModuleCount(): number;
    isDark(row: number, col: number): boolean;
    createImgTag(cellSize?: number, margin?: number): string;
    createSvgTag(cellSize?: number, margin?: number): string;
    createSvgTag(opts?: {
        cellSize?: number;
        margin?: number;
        scalable?: boolean;
    }): string;
    createDataURL(cellSize?: number, margin?: number): string;
    createTableTag(cellSize?: number, margin?: number): string;
    createASCII(cellSize?: number, margin?: number): string;
    renderTo2dContext(context: CanvasRenderingContext2D, cellSize?: number): void;
}
export declare type Options = {
    type?: DrawType;
    shape?: ShapeType;
    width?: number;
    height?: number;
    margin?: number;
    data?: string;
    image?: string;
    template?: string;
    frameOptions?: {
        style?: FrameStyle;
        height?: number;
        width?: number;
        x?: number;
        y?: number;
    };
    qrOptions?: {
        typeNumber?: TypeNumber;
        mode?: Mode;
        errorCorrectionLevel?: ErrorCorrectionLevel;
    };
    imageOptions?: {
        hideBackgroundDots?: boolean;
        imageSize?: number;
        crossOrigin?: string;
        margin?: number;
    };
    dotsOptions?: {
        type?: DotType;
        color?: string;
        gradient?: Gradient;
    };
    cornersSquareOptions?: {
        type?: CornerSquareType;
        color?: string;
        gradient?: Gradient;
    };
    cornersDotOptions?: {
        type?: CornerDotType;
        color?: string;
        gradient?: Gradient;
    };
    backgroundOptions?: {
        round?: number;
        color?: string;
        gradient?: Gradient;
    };
};
export declare type FilterFunction = (i: number, j: number) => boolean;
export declare type DrawArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
    getNeighbor?: GetNeighbor;
};
export declare type BasicFigureDrawArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
};
export declare type RotateFigureArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
    draw: () => void;
};
export declare type GetNeighbor = (x: number, y: number) => boolean;