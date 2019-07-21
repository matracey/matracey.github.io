import React from "react";

import PropTypes from "prop-types";

import { NeutralColors } from "@uifabric/fluent-theme/lib/fluent";
import {
    FontClassNames,
    FontWeights,
    Image,
    ImageFit,
} from "office-ui-fabric-react";

import "./Jumbotron.scss";

interface IJumbotronProps {
    header: string;
    subtext: string;
    imageHref: string;
    imageAlt: string;
}

const Jumbotron = (props: IJumbotronProps) => {
    const { header, subtext, imageHref, imageAlt } = props;
    return (
        <div className="pv-3 ms-borderBox jumbotron" style={{ backgroundColor: NeutralColors.gray10 }}>
            <div className="d-flex container">
                {imageHref && (
                    <Image
                        src={imageHref}
                        alt={imageAlt}
                        imageFit={ImageFit.contain}
                        maximizeFrame
                        width="12rem"
                        className="flex-shrink-0 flex-grow-0 rounded ms-hiddenMdDown"
                    />
                )}
                <div className="text-container flex-fill my-auto ml-3">
                    <div className={`${FontClassNames.superLarge} jumbotron-header`} style={{ fontWeight: FontWeights.semilight as any }}>{header}</div>
                    <div className={`${FontClassNames.xLarge} jumbotron-subtext`} style={{ fontWeight: FontWeights.light as any }}>
                        {subtext}
                    </div>
                </div>
            </div>
        </div>
    );
};

Jumbotron.propTypes = {
    header: PropTypes.string.isRequired,
    subtext: PropTypes.string,
};

export default Jumbotron;
