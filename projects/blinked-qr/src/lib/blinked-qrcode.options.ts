export interface UnknownObject {
    [key: string]: any;
}
export declare type DotType = "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded";
export declare type CornerDotType = "dot" | "square";
export declare type CornerSquareType = "dot" | "square" | "extra-rounded";
export declare type GradientType = "radial" | "linear";
export declare type DrawType = "canvas" | "svg";
export declare type ShapeType = "square" | "circle";
export declare type TemplateType = "default" | "ocean" | "sunflower" | "luxury" | "bitcoin" | "starbucks" | "angular" | "facebook" | "beans" | "green" | "sky" | "mosaic" | "coffee" | "vintage" | "stamp" | "chess" | 'jungle' | 'arabic' | 'tea' | 'grape';
// Array.from(Array(500).keys()).map(v => `"style${v + 1}"`).join(' | ')
export declare type FrameStyleEdit = "FE_001" | "FE_002" | "FE_003" | "FE_004" | "FE_005" | "FE_006" | "FE_007" | "FE_008" | "FE_009" | "FE_010" | "FE_011" | "FE_012" | "FE_013" | "FE_014" | "FE_015" | "FE_016" | "FE_017" | "FE_018" | "FE_019" | "FE_020" | "FE_021" | "FE_022" | "FE_023" | "FE_024" | "FE_025" | "FE_026" | "FE_027" | "FE_028" | "FE_029" | "FE_030" | "FE_031" | "FE_032" | "FE_033" | "FE_034" | "FE_035" | "FE_036" | "FE_037" | "FE_038" | "FE_039" | "FE_040" | "FE_041" | "FE_042" | "FE_043" | "FE_044" | "FE_045" | "FE_046" | "FE_047" | "FE_048" | "FE_049" | "FE_050" | "FE_051" | "FE_052" | "FE_053" | "FE_054" | "FE_055" | "FE_056" | "FE_057" | "FE_058" | "FE_059" | "FE_060" | "FE_061" | "FE_062" | "FE_063" | "FE_064" | "FE_065" | "FE_066" | "FE_067" | "FE_068" | "FE_069" | "FE_070" | "FE_071" | "FE_072" | "FE_073" | "FE_074" | "FE_075" | "FE_076" | "FE_077" | "FE_078" | "FE_079" | "FE_080" | "FE_081" | "FE_082" | "FE_083" | "FE_084" | "FE_085" | "FE_086" | "FE_087" | "FE_088" | "FE_089" | "FE_090" | "FE_091" | "FE_092" | "FE_093" | "FE_094" | "FE_095" | "FE_096" | "FE_097" | "FE_098" | "FE_099" | "FE_100" | "FE_101" | "FE_102" | "FE_103" | "FE_104" | "FE_105" | "FE_106" | "FE_107" | "FE_108" | "FE_109" | "FE_110" | "FE_111" | "FE_112" | "FE_113" | "FE_114" | "FE_115" | "FE_116" | "FE_117" | "FE_118" | "FE_119" | "FE_120" | "FE_121" | "FE_122" | "FE_123" | "FE_124" | "FE_125" | "FE_126" | "FE_127" | "FE_128" | "FE_129" | "FE_130" | "FE_131" | "FE_132" | "FE_133" | "FE_134" | "FE_135" | "FE_136" | "FE_137" | "FE_138" | "FE_139" | "FE_140" | "FE_141" | "FE_142" | "FE_143" | "FE_144" | "FE_145" | "FE_146" | "FE_147" | "FE_148" | "FE_149" | "FE_150" | "FE_151" | "FE_152" | "FE_153" | "FE_154" | "FE_155" | "FE_156" | "FE_157" | "FE_158" | "FE_159" | "FE_160" | "FE_161" | "FE_162" | "FE_163" | "FE_164" | "FE_165" | "FE_166" | "FE_167" | "FE_168" | "FE_169" | "FE_170" | "FE_171" | "FE_172" | "FE_173" | "FE_174" | "FE_175" | "FE_176" | "FE_177" | "FE_178" | "FE_179" | "FE_180" | "FE_181" | "FE_182" | "FE_183" | "FE_184" | "FE_185" | "FE_186" | "FE_187" | "FE_188" | "FE_189" | "FE_190" | "FE_191" | "FE_192" | "FE_193" | "FE_194" | "FE_195" | "FE_196" | "FE_197" | "FE_198" | "FE_199" | "FE_200" | "FE_201" | "FE_202" | "FE_203" | "FE_204" | "FE_205" | "FE_206" | "FE_207" | "FE_208" | "FE_209" | "FE_210" | "FE_211" | "FE_212" | "FE_213" | "FE_214" | "FE_215" | "FE_216" | "FE_217" | "FE_218" | "FE_219" | "FE_220" | "FE_221" | "FE_222" | "FE_223" | "FE_224" | "FE_225" | "FE_226" | "FE_227" | "FE_228" | "FE_229" | "FE_230" | "FE_231" | "FE_232" | "FE_233" | "FE_234" | "FE_235" | "FE_236" | "FE_237" | "FE_238" | "FE_239" | "FE_240" | "FE_241" | "FE_242" | "FE_243" | "FE_244" | "FE_245" | "FE_246" | "FE_247" | "FE_248" | "FE_249" | "FE_250" | "FE_251" | "FE_252" | "FE_253" | "FE_254" | "FE_255" | "FE_256" | "FE_257" | "FE_258" | "FE_259" | "FE_260" | "FE_261" | "FE_262" | "FE_263" | "FE_264" | "FE_265" | "FE_266" | "FE_267" | "FE_268" | "FE_269" | "FE_270" | "FE_271" | "FE_272" | "FE_273" | "FE_274" | "FE_275" | "FE_276" | "FE_277" | "FE_278" | "FE_279" | "FE_280" | "FE_281" | "FE_282" | "FE_283" | "FE_284" | "FE_285" | "FE_286" | "FE_287" | "FE_288" | "FE_289" | "FE_290" | "FE_291" | "FE_292" | "FE_293" | "FE_294" | "FE_295" | "FE_296" | "FE_297" | "FE_298" | "FE_299" | "FE_300" | "FE_301" | "FE_302" | "FE_303" | "FE_304" | "FE_305" | "FE_306" | "FE_307" | "FE_308" | "FE_309" | "FE_310" | "FE_311" | "FE_312" | "FE_313" | "FE_314" | "FE_315" | "FE_316" | "FE_317" | "FE_318" | "FE_319" | "FE_320" | "FE_321" | "FE_322" | "FE_323" | "FE_324" | "FE_325" | "FE_326" | "FE_327" | "FE_328" | "FE_329" | "FE_330" | "FE_331" | "FE_332" | "FE_333" | "FE_334" | "FE_335" | "FE_336" | "FE_337" | "FE_338" | "FE_339" | "FE_340" | "FE_341" | "FE_342" | "FE_343" | "FE_344" | "FE_345" | "FE_346" | "FE_347" | "FE_348" | "FE_349" | "FE_350" | "FE_351" | "FE_352" | "FE_353" | "FE_354" | "FE_355" | "FE_356" | "FE_357" | "FE_358" | "FE_359" | "FE_360" | "FE_361" | "FE_362" | "FE_363" | "FE_364" | "FE_365" | "FE_366" | "FE_367" | "FE_368" | "FE_369" | "FE_370" | "FE_371" | "FE_372" | "FE_373" | "FE_374" | "FE_375" | "FE_376" | "FE_377" | "FE_378" | "FE_379" | "FE_380" | "FE_381" | "FE_382" | "FE_383" | "FE_384" | "FE_385" | "FE_386" | "FE_387" | "FE_388" | "FE_389" | "FE_390" | "FE_391" | "FE_392" | "FE_393" | "FE_394" | "FE_395" | "FE_396" | "FE_397" | "FE_398" | "FE_399" | "FE_400" | "FE_401" | "FE_402" | "FE_403" | "FE_404" | "FE_405" | "FE_406" | "FE_407" | "FE_408" | "FE_409" | "FE_410" | "FE_411" | "FE_412" | "FE_413" | "FE_414" | "FE_415" | "FE_416" | "FE_417" | "FE_418" | "FE_419" | "FE_420" | "FE_421" | "FE_422" | "FE_423" | "FE_424" | "FE_425" | "FE_426" | "FE_427" | "FE_428" | "FE_429" | "FE_430" | "FE_431" | "FE_432" | "FE_433" | "FE_434" | "FE_435" | "FE_436" | "FE_437" | "FE_438" | "FE_439" | "FE_440" | "FE_441" | "FE_442" | "FE_443" | "FE_444" | "FE_445" | "FE_446" | "FE_447" | "FE_448" | "FE_449" | "FE_450" | "FE_451" | "FE_452" | "FE_453" | "FE_454" | "FE_455" | "FE_456" | "FE_457" | "FE_458" | "FE_459" | "FE_460" | "FE_461" | "FE_462" | "FE_463" | "FE_464" | "FE_465" | "FE_466" | "FE_467" | "FE_468" | "FE_469" | "FE_470" | "FE_471" | "FE_472" | "FE_473" | "FE_474" | "FE_475" | "FE_476" | "FE_477" | "FE_478" | "FE_479" | "FE_480" | "FE_481" | "FE_482" | "FE_483" | "FE_484" | "FE_485" | "FE_486" | "FE_487" | "FE_488" | "FE_489" | "FE_490" | "FE_491" | "FE_492" | "FE_493" | "FE_494" | "FE_495" | "FE_496" | "FE_497" | "FE_498" | "FE_499" | "FE_500";
export declare type FrameStyle = FrameStyleEdit | "F_001" | "F_002" | "F_003" | "F_004" | "F_005" | "F_006" | "F_007" | "F_008" | "F_009" | "F_010" | "F_011" | "F_012" | "F_013" | "F_014" | "F_015" | "F_016" | "F_017" | "F_018" | "F_019" | "F_020" | "F_021" | "F_022" | "F_023" | "F_024" | "F_025" | "F_026" | "F_027" | "F_028" | "F_029" | "F_030" | "F_031" | "F_032" | "F_033" | "F_034" | "F_035" | "F_036" | "F_037" | "F_038" | "F_039" | "F_040" | "F_041" | "F_042" | "F_043" | "F_044" | "F_045" | "F_046" | "F_047" | "F_048" | "F_049" | "F_050" | "F_051" | "F_052" | "F_053" | "F_054" | "F_055" | "F_056" | "F_057" | "F_058" | "F_059" | "F_060" | "F_061" | "F_062" | "F_063" | "F_064" | "F_065" | "F_066" | "F_067" | "F_068" | "F_069" | "F_070" | "F_071" | "F_072" | "F_073" | "F_074" | "F_075" | "F_076" | "F_077" | "F_078" | "F_079" | "F_080" | "F_081" | "F_082" | "F_083" | "F_084" | "F_085" | "F_086" | "F_087" | "F_088" | "F_089" | "F_090" | "F_091" | "F_092" | "F_093" | "F_094" | "F_095" | "F_096" | "F_097" | "F_098" | "F_099" | "F_100" | "F_101" | "F_102" | "F_103" | "F_104" | "F_105" | "F_106" | "F_107" | "F_108" | "F_109" | "F_110" | "F_111" | "F_112" | "F_113" | "F_114" | "F_115" | "F_116" | "F_117" | "F_118" | "F_119" | "F_120" | "F_121" | "F_122" | "F_123" | "F_124" | "F_125" | "F_126" | "F_127" | "F_128" | "F_129" | "F_130" | "F_131" | "F_132" | "F_133" | "F_134" | "F_135" | "F_136" | "F_137" | "F_138" | "F_139" | "F_140" | "F_141" | "F_142" | "F_143" | "F_144" | "F_145" | "F_146" | "F_147" | "F_148" | "F_149" | "F_150" | "F_151" | "F_152" | "F_153" | "F_154" | "F_155" | "F_156" | "F_157" | "F_158" | "F_159" | "F_160" | "F_161" | "F_162" | "F_163" | "F_164" | "F_165" | "F_166" | "F_167" | "F_168" | "F_169" | "F_170" | "F_171" | "F_172" | "F_173" | "F_174" | "F_175" | "F_176" | "F_177" | "F_178" | "F_179" | "F_180" | "F_181" | "F_182" | "F_183" | "F_184" | "F_185" | "F_186" | "F_187" | "F_188" | "F_189" | "F_190" | "F_191" | "F_192" | "F_193" | "F_194" | "F_195" | "F_196" | "F_197" | "F_198" | "F_199" | "F_200" | "F_201" | "F_202" | "F_203" | "F_204" | "F_205" | "F_206" | "F_207" | "F_208" | "F_209" | "F_210" | "F_211" | "F_212" | "F_213" | "F_214" | "F_215" | "F_216" | "F_217" | "F_218" | "F_219" | "F_220" | "F_221" | "F_222" | "F_223" | "F_224" | "F_225" | "F_226" | "F_227" | "F_228" | "F_229" | "F_230" | "F_231" | "F_232" | "F_233" | "F_234" | "F_235" | "F_236" | "F_237" | "F_238" | "F_239" | "F_240" | "F_241" | "F_242" | "F_243" | "F_244" | "F_245" | "F_246" | "F_247" | "F_248" | "F_249" | "F_250" | "F_251" | "F_252" | "F_253" | "F_254" | "F_255" | "F_256" | "F_257" | "F_258" | "F_259" | "F_260" | "F_261" | "F_262" | "F_263" | "F_264" | "F_265" | "F_266" | "F_267" | "F_268" | "F_269" | "F_270" | "F_271" | "F_272" | "F_273" | "F_274" | "F_275" | "F_276" | "F_277" | "F_278" | "F_279" | "F_280" | "F_281" | "F_282" | "F_283" | "F_284" | "F_285" | "F_286" | "F_287" | "F_288" | "F_289" | "F_290" | "F_291" | "F_292" | "F_293" | "F_294" | "F_295" | "F_296" | "F_297" | "F_298" | "F_299" | "F_300" | "F_301" | "F_302" | "F_303" | "F_304" | "F_305" | "F_306" | "F_307" | "F_308" | "F_309" | "F_310" | "F_311" | "F_312" | "F_313" | "F_314" | "F_315" | "F_316" | "F_317" | "F_318" | "F_319" | "F_320" | "F_321" | "F_322" | "F_323" | "F_324" | "F_325" | "F_326" | "F_327" | "F_328" | "F_329" | "F_330" | "F_331" | "F_332" | "F_333" | "F_334" | "F_335" | "F_336" | "F_337" | "F_338" | "F_339" | "F_340" | "F_341" | "F_342" | "F_343" | "F_344" | "F_345" | "F_346" | "F_347" | "F_348" | "F_349" | "F_350" | "F_351" | "F_352" | "F_353" | "F_354" | "F_355" | "F_356" | "F_357" | "F_358" | "F_359" | "F_360" | "F_361" | "F_362" | "F_363" | "F_364" | "F_365" | "F_366" | "F_367" | "F_368" | "F_369" | "F_370" | "F_371" | "F_372" | "F_373" | "F_374" | "F_375" | "F_376" | "F_377" | "F_378" | "F_379" | "F_380" | "F_381" | "F_382" | "F_383" | "F_384" | "F_385" | "F_386" | "F_387" | "F_388" | "F_389" | "F_390" | "F_391" | "F_392" | "F_393" | "F_394" | "F_395" | "F_396" | "F_397" | "F_398" | "F_399" | "F_400" | "F_401" | "F_402" | "F_403" | "F_404" | "F_405" | "F_406" | "F_407" | "F_408" | "F_409" | "F_410" | "F_411" | "F_412" | "F_413" | "F_414" | "F_415" | "F_416" | "F_417" | "F_418" | "F_419" | "F_420" | "F_421" | "F_422" | "F_423" | "F_424" | "F_425" | "F_426" | "F_427" | "F_428" | "F_429" | "F_430" | "F_431" | "F_432" | "F_433" | "F_434" | "F_435" | "F_436" | "F_437" | "F_438" | "F_439" | "F_440" | "F_441" | "F_442" | "F_443" | "F_444" | "F_445" | "F_446" | "F_447" | "F_448" | "F_449" | "F_450" | "F_451" | "F_452" | "F_453" | "F_454" | "F_455" | "F_456" | "F_457" | "F_458" | "F_459" | "F_460" | "F_461" | "F_462" | "F_463" | "F_464" | "F_465" | "F_466" | "F_467" | "F_468" | "F_469" | "F_470" | "F_471" | "F_472" | "F_473" | "F_474" | "F_475" | "F_476" | "F_477" | "F_478" | "F_479" | "F_480" | "F_481" | "F_482" | "F_483" | "F_484" | "F_485" | "F_486" | "F_487" | "F_488" | "F_489" | "F_490" | "F_491" | "F_492" | "F_493" | "F_494" | "F_495" | "F_496" | "F_497" | "F_498" | "F_499" | "F_500";
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
    scale?: number;
    rotate?: number;
    template?: string;
    frameOptions?: {
        style?: FrameStyle;
        height?: number;
        width?: number;
        x?: number;
        y?: number;
        texts?: UnknownObject[];
        contents?: UnknownObject[];
        containers?: UnknownObject[];
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