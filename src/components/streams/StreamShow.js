import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
	componentDidMount(){
		this.props.fetchStream(this.props.match.params.id);

	}
	render(){
		return <div>{this.props.stream.title}</div>
	}
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	return { stream: state.streams[id] };
};

export default connect(
	mapStateToProps, 
	{fetchStream}
)(StreamShow);