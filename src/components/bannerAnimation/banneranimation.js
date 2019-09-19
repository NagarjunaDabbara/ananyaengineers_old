import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	border: 5px solid #efefef;
	line-height: 1.6;
	font-family: Ariel, Helvetica, sans-serif;
	font-size: 1em;
	position: relative;
	height: 550px;
	overflow: hidden;
`
const Handle = styled.div.attrs({
	style: ({left, background, transform}) => ({
		left,
		background,
		transform,
	}),
})`	
	position: absolute;
	height: 100%;
	display: block;
	background: #efefef;
	width: 5px;
	top: 0;
	left: 50%;
	z-index: 3;
`
const SkewedHandle = styled(Handle)`
	top: 50%;
	transform: rotate(33deg) translateY(-50%);
	height: 200%;
	transform-origin: top;
`
const Layer = styled.div.attrs({
	style: ({ width, transform }) => ({
		width,
		transform,
	}),
})`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
`

const LayerBottom = styled(Layer)`
	background: #efefef;
	z-index:1;
`

const SkewedLayerTop = styled(Layer)`
	background: #efefef;
	color: #000;
	z-index: 2;
	transform: skew(-33deg);
	margin-left: -1000px;
`

const ContentWrap = styled.div.attrs({
	style: ({ transform }) => ({
		transform,
	}),
})`
	position: absolute;
	width: 95vw;
	min-height: 100%;

`

const SkewedTopContentWrap = styled(ContentWrap)`
	transform: skew(33deg);
	margin-left: 1000px;
`

const ContentBody = styled.div`
	width: 20%;
	position: absolute;
	top: 50%;
	text-align: center;
	transform: translateY(-50%);
	color: #000;
	
	@media (max-width: 875px) {
    display: none;
  }
`;
const BottomBody = styled(ContentBody)`
	right: 2%;
`
const TopBody = styled(ContentBody)`
    line-height:20px;
	color: #000;
`

const Title = styled.h1`
	font-size: 1em;
	color: #06659B;

`

const BottomTitle = styled(Title)`
	color: #06659B;
`
const Img = styled.img`
	position: absolute;
	height: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

// Parent Component

class SplitSlider extends React.Component {
	constructor(props){
		super(props);
		this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, delta: 0, skew: 1000, layerWidth: 50, handle: 50 + '%' };
	}
	
	handleMouseMove(event) {
		let delta = ( event.clientX - window.innerWidth / 2) * 0.5;
    this.setState({
			delta: delta,
			layerWidth: event.clientX + this.state.skew + delta + "px",
			handle: event.clientX + delta + 'px' 
    });
  }
	
	handleDegrees(degr) {
		if (degr >= 45) {
			degr = 45;
		} else if (degr <= -45) {
			degr = -45;
		}

		return 'rotate('+ degr + 'deg) ' + 'translateY(-50%)';
	}
	
	render() {

		return (
            
			<Wrapper onMouseMove={this.handleMouseMove}>
				
                <LowerLayer 
					title={this.props.BottomLayerTitle} 
					text={this.props.BottomLayerText} 
					src={this.props.BottomLayerSrc}/>
				<TopLayer layerWidth={this.state.layerWidth}
					title={this.props.TopLayerTitle}
					text={this.props.TopLayerText}
					src={this.props.TopLayerSrc}
					degree={this.props.handleRotation} />
				<SkewedHandle left={this.state.handle} background={this.props.handleColor} transform={this.handleDegrees(this.props.handleRotation)} />
			</Wrapper>
			
		);
	}
}

// Bottom Layer Layout Component

class LowerLayer extends React.Component {
	
	render() {
		return (
			<LayerBottom>
				<ContentWrap>
					<BottomBody>
						<BottomTitle>{this.props.title}</BottomTitle>
						<p>{this.props.text}</p>
                       </BottomBody>
					<Img src={this.props.src}/>
				</ContentWrap>
			</LayerBottom>
		);
	}
}

// Top Layer Component

class TopLayer extends React.Component {
	
	
	render() {
		const SkewedDegree = (prop) => {
		if(prop < 0) {
			prop =  Math.abs(prop);
		} else {
			prop = -Math.abs(prop);
		}
		
		return 'skew('+ prop +'deg)';
	};
		
		return (
			<SkewedLayerTop width={this.props.layerWidth} transform={SkewedDegree(this.props.degree)}>
				<SkewedTopContentWrap transform={'skew('+ this.props.degree +'deg)'}>
					<TopBody>
						<Title>{this.props.title}</Title>
						<p>{this.props.text}</p>
                       
					</TopBody>
					<Img src={this.props.src} />
				</SkewedTopContentWrap>
			</SkewedLayerTop>
		);
	}
}


export default SplitSlider