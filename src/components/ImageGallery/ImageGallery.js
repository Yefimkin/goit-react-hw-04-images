import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImageGallery = styled.ul`
	display: grid;
	max-width: calc(100vw - 48px);
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 16px;
	margin-top: 0;
	margin-bottom: 0;
	padding: 0;
	list-style: none;
	margin-left: auto;
	margin-right: auto;
`;

export default class ImageGallery extends Component {
	handleClick = (largeImageURL) => {
		this.props.onClose(largeImageURL);
	};

	render() {
		const { pictures } = this.props;

		return (
			<StyledImageGallery>
				{pictures.map(({ id, webformatURL, largeImageURL }) => (
					<ImageGalleryItem
						key={id}
						id={id}
						imageUrl={webformatURL}
						onClick={() => this.handleClick(largeImageURL)}
					/>
				))}
			</StyledImageGallery>
		);
	}
}

ImageGallery.propTypes = {
	pictures: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			webformatURL: PropTypes.string,
			largeImageURL: PropTypes.string,
		})
	).isRequired,
	onClose: PropTypes.func.isRequired,
};