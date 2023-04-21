const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { dispatch, select, getBlock } = wp.data;
const { RichText, InspectorControls, BlockControls, InnerBlocks } =
  wp.blockEditor;
const { PanelBody, TextControl, IconButton, Toolbar } = wp.components;
const { useEffect, useState } = wp.element;

import Slide from "./slide";

registerBlockType("divisiononeblocks/slider", {
  title: __("Slider D1", "divisiononeblocks"),
  description: __("Slider Block", "divisiononeblocks"),
  category: "divisiononeblocks",
  icon: "slides",
  keywords: [
    __("Slider", "divisiononeblocks"),
    __("Carousel", "divisiononeblocks"),
    __("Division One Blocks", "divisiononeblocks"),
  ],
  attributes: {
    autoplay: {
      type: "boolean",
      default: true,
    },
    autoplaySpeed: {
      type: "number",
      default: 5000,
    },
    dots: {
      type: "boolean",
      default: true,
    },
    arrows: {
      type: "boolean",
      default: true,
    },
    fade: {
      type: "boolean",
      default: false,
    },
    infinite: {
      type: "boolean",
      default: true,
    },
    speed: {
      type: "number",
      default: 500,
    },
  },
  supports: {
    align: ["wide", "full"],
  },
  edit: (props) => {
    const {
      attributes: {
        autoplay,
        autoplaySpeed,
        dots,
        arrows,
        fade,
        infinite,
        speed,
      },
      setAttributes,
    } = props;

    const parentBlock = select("core/editor").getBlocksByClientId(
      props.clientId
    )[0];
    const childBlocks = parentBlock.innerBlocks;
    const [childBlocksState, setChildBlocksState] = useState(childBlocks);
    const [indexOfCurrentSlide, setIndexOfCurrentSlide] = useState(0);

    useEffect(() => {
      console.log(childBlocksState);
    }, [childBlocksState]);

    useEffect(() => {
      console.log(indexOfCurrentSlide);

      dispatch("core/block-editor").selectBlock(
        childBlocksState[indexOfCurrentSlide].clientId
      );
    }, [indexOfCurrentSlide]);

    const onChangeSlides = (newSlides) => {
      setAttributes({ slides: newSlides });
    };

    const onChangeAutoplay = (newAutoplay) => {
      setAttributes({ autoplay: newAutoplay });
    };

    const onChangeAutoplaySpeed = (newAutoplaySpeed) => {
      setAttributes({ autoplaySpeed: newAutoplaySpeed });
    };

    const onChangeDots = (newDots) => {
      setAttributes({ dots: newDots });
    };

    const onChangeArrows = (newArrows) => {
      setAttributes({ arrows: newArrows });
    };

    const onChangeFade = (newFade) => {
      setAttributes({ fade: newFade });
    };

    const onChangeInfinite = (newInfinite) => {
      setAttributes({ infinite: newInfinite });
    };

    const onChangeSpeed = (newSpeed) => {
      setAttributes({ speed: newSpeed });
    };

    const TEMPLATE = [
      [
        "divisiononeblocks/slide",
        {
          className: "active",
        },
      ],
    ];

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Slider Settings", "divisiononeblocks")}>
            <TextControl
              label={__("Autoplay", "divisiononeblocks")}
              value={autoplay}
              onChange={onChangeAutoplay}
            />
            <TextControl
              label={__("Autoplay Speed", "divisiononeblocks")}
              value={autoplaySpeed}
              onChange={onChangeAutoplaySpeed}
            />
            <TextControl
              label={__("Dots", "divisiononeblocks")}
              value={dots}
              onChange={onChangeDots}
            />
            <TextControl
              label={__("Arrows", "divisiononeblocks")}
              value={arrows}
              onChange={onChangeArrows}
            />
            <TextControl
              label={__("Fade", "divisiononeblocks")}
              value={fade}
              onChange={onChangeFade}
            />
            <TextControl
              label={__("Infinite", "divisiononeblocks")}
              value={infinite}
              onChange={onChangeInfinite}
            />
            <TextControl
              label={__("Speed", "divisiononeblocks")}
              value={speed}
              onChange={onChangeSpeed}
            />
          </PanelBody>
        </InspectorControls>
        <BlockControls>
          <Toolbar>
            <IconButton
              className="components-toolbar__control"
              label={__("Preview", "divisiononeblocks")}
              icon="controls-play"
              //   onClick={open}
            />
          </Toolbar>
          <Toolbar>
            <IconButton
              className="components-toolbar__control"
              label={__("Add Slide", "divisiononeblocks")}
              icon="insert"
              onClick={() => {
                //dispatch slide block inside this block
                dispatch("core/block-editor").insertBlock(
                  wp.blocks.createBlock("divisiononeblocks/slide"),
                  childBlocksState.length,
                  props.clientId
                );
                //update slides state
                setChildBlocksState(
                  select("core/editor").getBlocksByClientId(props.clientId)[0]
                    .innerBlocks
                );
              }}
            />
          </Toolbar>
          <Toolbar>
            <IconButton
              className="components-toolbar__control"
              label={__("Remove Current Slide", "divisiononeblocks")}
              icon="remove"
              //   onClick={open}
            />
          </Toolbar>
          <Toolbar>
            <IconButton
              className="components-toolbar__control"
              label={__("Last Slide", "divisiononeblocks")}
              icon="arrow-left-alt2"
              onClick={() => {
                if (indexOfCurrentSlide - 1 < 0) {
                  setIndexOfCurrentSlide(childBlocksState.length - 1);
                } else {
                  setIndexOfCurrentSlide(indexOfCurrentSlide - 1);
                }
              }}
            />
          </Toolbar>
          <Toolbar>
            <IconButton
              className="components-toolbar__control"
              label={__("Next Slide", "divisiononeblocks")}
              icon="arrow-right-alt2"
              onClick={() => {
                if (indexOfCurrentSlide + 1 > childBlocksState.length - 1) {
                  setIndexOfCurrentSlide(0);
                } else {
                  setIndexOfCurrentSlide(indexOfCurrentSlide + 1);
                }
              }}
              disabled={childBlocksState.length <= 1 ? true : false}
            />
          </Toolbar>
        </BlockControls>
        <div className="slider">
          <InnerBlocks template={TEMPLATE} />
        </div>
      </>
    );
  },
  save: (props) => {
    const {
      attributes: {
        slides,
        autoplay,
        autoplaySpeed,
        dots,
        arrows,
        fade,
        infinite,
        speed,
      },
    } = props;

    return (
      <div className="slider">
        <InnerBlocks.Content className="d1-active" />
      </div>
    );
  },
});

// Path: src/02-Slider/style.scss
