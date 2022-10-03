import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 1200;
`;

const StyledModal = styled.div`
	max-width: calc(100vw - 48px);
	max-height: calc(100vh - 24px);
`;

export default class Modal extends Component {
	componentDidMount() {
		window.addEventListener("keydown", this.handelModalEscapeKey);
		window.addEventListener("click", this.handleCloseClickOverlay);
	}
	componentDidUpdate() {
		window.removeEventListener("keydown", this.handelModalEscapeKey);
		window.removeEventListener("click", this.handleCloseClickOverlay);
	}

	handelModalEscapeKey = (event) => {
		if (event.code === "Escape") {
			this.props.onClose();
		}
	};

	closeModalOnOverlayClick = () => {
		this.props.onClose();
	};

	render() {
		const { largeImageUrl } = this.props;
		return (
			<StyledOverlay
				className="Overlay"
				onClick={this.closeModalOnOverlayClick}
			>
				<StyledModal className="Modal">
					<img src={largeImageUrl} alt="Not Available" />
				</StyledModal>
			</StyledOverlay>
		);
	}
}

Modal.propTypes = {
	largeImageUrl: PropTypes.string,
	onClose: PropTypes.func.isRequired,
};