import React from "react";
import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const LocationSvg = () => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <title>定位</title>
        <defs>
            <polygon id="path-1" points="0 0 24 0 24 24 0 24"></polygon>
        </defs>
        <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="官网/团队致谢" transform="translate(-404.000000, -1358.000000)">
                <g id="卡片/贡献者备份-4" transform="translate(384.000000, 1212.000000)">
                    <g id="定位" transform="translate(20.000000, 146.000000)">
                        <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1"></use>
                        </mask>
                        <g id="Clip-2"></g>
                        <g id="定位-4" mask="url(#mask-2)" fill="#C3C7CF">
                            <g transform="translate(5.500000, 4.000000)">
                                <path
                                    d="M6.50716394,1.2605942 C9.41610589,1.2605942 11.7619609,3.51620027 11.7619609,6.28547981 C11.7505395,7.30942305 11.4228459,8.3037731 10.8253089,9.12756049 L10.7597516,9.23156211 C10.7671802,9.22087831 10.7756302,9.21104542 10.7848231,9.20187437 L10.7398802,9.25359154 L6.49323534,14.739488 L2.24659053,9.25359154 L2.22244762,9.22456564 L2.17629752,9.15025175 L2.21251188,9.21322 L2.20944759,9.21009996 L2.2152976,9.21832554 C1.56000334,8.29488569 1.2381598,7.31566315 1.2381598,6.28547981 C1.25050982,3.51052746 3.59051484,1.2605942 6.50716394,1.2605942 M6.50716394,0 C2.92287055,0 0.0157857481,2.79537449 0,6.28226522 L0.00157857481,6.42730021 C0.0294357774,7.63050442 0.405508012,8.77395497 1.07993089,9.75591937 L1.15273104,9.85963735 L1.18578826,9.91419093 L1.21643118,9.96080257 C1.23723122,9.99077394 1.25914556,10.019138 1.28365989,10.0471239 L1.28923133,10.0534586 L5.52101897,15.5198783 C5.58128339,15.597785 5.65036925,15.6682225 5.7268837,15.7297725 L5.7812981,15.7707113 C6.31912783,16.1555173 7.05845798,16.0453702 7.46545171,15.5198783 L11.6972394,10.0534586 L11.667525,10.0862663 C11.7201751,10.0314291 11.7603823,9.97715919 11.800311,9.91447457 L11.8393111,9.8504663 C12.5735341,8.83314135 12.9846135,7.59712935 13.0000279,6.29332721 C13.0000279,2.80360007 10.0843073,0 6.50716394,0"
                                    id="Fill-1"
                                ></path>
                                <path
                                    d="M6.50004179,4.8199739 C7.35479362,4.81959587 8.04797367,5.52482141 8.04834525,6.39503134 C8.04871653,7.26533582 7.35609362,7.97112864 6.50143465,7.97150683 L6.50004179,7.97150683 C5.64528995,7.97150683 4.95238847,7.26599765 4.95238847,6.39578771 C4.95238847,5.52548324 5.64528995,4.8199739 6.50004179,4.8199739 M6.50004179,3.55937986 C4.96148849,3.55937986 3.71432153,4.82923965 3.71432153,6.39578771 C3.71432153,7.96224123 4.96148849,9.23219557 6.50004179,9.23219557 C8.03859508,9.23219557 9.28576204,7.96224123 9.28576204,6.39578771 C9.28576204,4.82923965 8.03859508,3.55937986 6.50004179,3.55937986"
                                    id="Fill-3"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);
export const LocationSvgIcon = (props: Partial<CustomIconComponentProps>) => {
    return <Icon component={LocationSvg} {...props} />;
};

const PhoneSvg = () => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>联系方法</title>
            <g id="Yak-官网" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="官网商业互作版设计备份-3" transform="translate(-408.000000, -4860.000000)">
                    <g id="编组-4备份" transform="translate(384.000000, 4840.000000)">
                        <g id="icon/基础通用类/位置" transform="translate(24.000000, 20.000000)">
                            <path
                                d="M6.4654916,3.80038186 C5.67455808,3.95318596 5.12239818,4.33328648 4.43829057,5.01772553 L3.85820625,5.61757008 C1.79346874,7.62858157 3.61832606,12.4863968 7.57756689,16.4303632 C11.4623316,20.3000915 16.2122399,22.1387368 18.2932976,20.2504155 L18.8115993,19.7617924 C19.595734,19.0150519 20.0361842,18.4226898 20.1994032,17.5618979 C20.4286216,16.3530351 19.871845,15.2331021 18.6750181,14.2664197 C16.7082952,12.6855375 15.1486557,12.6064543 13.7226444,13.9012781 L13.6223957,13.9942263 L13.5774889,14.0370391 L13.6019057,14.052966 C13.1657894,13.7816163 12.5828938,13.291343 11.8688894,12.6054887 L11.6148797,12.3588355 L11.4356406,12.1762253 C10.7921977,11.5147218 10.3015235,10.9430093 10.0075042,10.4958225 L9.96930348,10.4375809 L10.0791333,10.3244267 C11.4124965,8.9040771 11.3415155,7.3355634 9.74601827,5.32849892 C8.79087923,4.12697651 7.6758949,3.56653846 6.4654916,3.80038186 Z M8.54881331,6.27963441 C10.1709652,8.32022933 9.38692513,8.87429815 8.44066985,9.79324156 C7.79180909,10.4283936 9.15712027,12.0500585 10.5494673,13.4555013 L10.8093636,13.7078393 C12.1602612,15.0054769 13.6159898,16.1730185 14.212827,15.5636656 L14.5573635,15.2170854 C15.3146941,14.4695483 15.9698116,14.0535769 17.7139716,15.4555546 C19.4376581,16.8477839 18.5972499,17.8545508 17.7568418,18.6548812 L17.3084336,19.0772728 C16.2810707,20.117841 12.4419779,19.1178144 8.65695677,15.3474436 C4.92624879,11.6311284 3.9207879,7.86267094 4.88498398,6.75625793 L5.43640492,6.18288012 C6.23768744,5.36331369 7.21504397,4.60181192 8.54881331,6.27963441 Z"
                                id="路径"
                                fill="#686C78"
                            ></path>
                            <path
                                d="M20.8,0 L0,0 C0,0.96 0,2.02666667 0,3.2 L0,24 C0.96,24 2.02666667,24 3.2,24 L24,24 C24,23.04 24,21.9733333 24,20.8 L24,0 C23.04,0 21.9733333,0 20.8,0 Z"
                                id="路径"
                                fillRule="nonzero"
                            ></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
export const PhoneSvgIcon = (props: Partial<CustomIconComponentProps>) => {
    return <Icon component={PhoneSvg} {...props} />;
};

const WechatSvg = () => (
    <svg
        className="icon"
        viewBox="0 0 1026 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1515"
        width="1em"
        height="1em"
    >
        <path
            d="M718.933333 352h-23.466666c-32-147.2-177.066667-256-345.6-256-192 0-349.866667 142.933333-349.866667 320 0 66.133333 21.333333 130.133333 64 183.466667V768c0 32 19.2 42.666667 25.6 44.8 4.266667 2.133333 8.533333 2.133333 14.933333 2.133333 10.666667 0 21.333333-4.266667 36.266667-17.066666l85.333333-85.333334c68.266667 23.466667 147.2 27.733333 219.733334 8.533334 49.066667 87.466667 153.6 147.2 275.2 147.2 34.133333 0 66.133333-4.266667 98.133333-12.8l66.133333 57.6c12.8 10.666667 25.6 14.933333 34.133334 14.933333 8.533333 0 12.8-2.133333 17.066666-4.266667 8.533333-4.266667 25.6-14.933333 25.6-44.8v-108.8c40.533333-44.8 64-102.4 64-160-2.133333-140.8-138.666667-258.133333-307.2-258.133333z m-298.666666 311.466667c-64 12.8-130.133333 8.533333-189.866667-17.066667-12.8-4.266667-25.6-2.133333-34.133333 6.4L128 723.2v-134.4c0-8.533333-2.133333-14.933333-6.4-21.333333-38.4-42.666667-57.6-96-57.6-151.466667 0-140.8 130.133333-256 288-256 136.533333 0 253.866667 87.466667 281.6 202.666667-125.866667 32-219.733333 130.133333-219.733333 249.6 0 17.066667 2.133333 34.133333 6.4 51.2z m484.266666 72.533333c-6.4 6.4-8.533333 14.933333-8.533333 23.466667v83.2l-51.2-44.8c-6.4-4.266667-12.8-8.533333-21.333333-8.533334-4.266667 0-6.4 0-10.666667 2.133334-29.866667 10.666667-61.866667 14.933333-93.866667 14.933333-132.266667 0-241.066667-87.466667-241.066666-196.266667s108.8-196.266667 241.066666-196.266666c132.266667 0 238.933333 87.466667 238.933334 196.266666 2.133333 46.933333-17.066667 89.6-53.333334 125.866667z"
            fill="#686C78"
            p-id="1516"
        ></path>
        <path d="M800 576m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#212121" p-id="1517"></path>
        <path d="M640 576m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#212121" p-id="1518"></path>
        <path
            d="M465.066667 366.933333m-46.933334 0a46.933333 46.933333 0 1 0 93.866667 0 46.933333 46.933333 0 1 0-93.866667 0Z"
            fill="#686C78"
            p-id="1519"
        ></path>
        <path
            d="M273.066667 366.933333m-46.933334 0a46.933333 46.933333 0 1 0 93.866667 0 46.933333 46.933333 0 1 0-93.866667 0Z"
            fill="#686C78"
            p-id="1520"
        ></path>
    </svg>
);
export const WechatSvgIcon = (props: Partial<CustomIconComponentProps>) => {
    return <Icon component={WechatSvg} {...props} />;
};

