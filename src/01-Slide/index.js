const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {  } = wp.blockEditor;
import { RichText, InspectorControls } from '@wordpress/block-editor';
const { PanelBody, TextControl, IconButton, Toolbar } = wp.components;

registerBlockType("divisiononeblocks/slide", {
    title: __("Slide D1", "divisiononeblocks"),
    description: __("Slide Block", "divisiononeblocks"),
    category: "divisiononeblocks",
    icon: "slides",
    keywords: [
        __("Slide", "divisiononeblocks"),
        __("Carousel", "divisiononeblocks"),
        __("Division One Blocks", "divisiononeblocks"),
    ],
    attributes: {
        title: {
            type: "string",
            default: "Slide Title",
        },
        content: {
            type: "string",
            default: "Slide Content",
        },
        image: {
            type: "string",
            default: "https://picsum.photos/1920/1080?image=0",
        },
    },
    edit: (props) => {
        const { attributes: { title, content, image }, setAttributes } = props;
        const onChangeTitle = (newTitle) => {
            setAttributes({ title: newTitle });
        };
        const onChangeContent = (newContent) => {
            setAttributes({ content: newContent });
        };
        const onChangeImage = (newImage) => {
            setAttributes({ image: newImage });
        };
        return (
            <div className="slide">
                <div className="slide__image">
                    <img src={image} />
                </div>
                <div className="slide__content">
                    <RichText
                        tagName="h2"
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <RichText
                        tagName="p"
                        value={content}
                        onChange={onChangeContent}
                    />
                </div>
                <InspectorControls>
                    <PanelBody title="Slide Settings">
                        <TextControl
                            label="Image URL"
                            value={image}
                            onChange={onChangeImage}
                        />
                    </PanelBody>
                </InspectorControls>
            </div>
        );
    },
    save: (props) => {
        const { attributes: { title, content, image } } = props;
        return (
            <div className="slide">
                <div className="slide__image">
                    <img src={image} />
                </div>
                <div className="slide__content">
                    <RichText.Content tagName="h2" value={title} />
                    <RichText.Content tagName="p" value={content} />
                </div>
            </div>
        );
    }
});
