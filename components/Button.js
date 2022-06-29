import React from 'react';
import styles from '../styles.css';
const Button = (props) => {
	return (
		<>
			<Button className='ui-button'>{props.children}</Button>
		</>
	);
};

export default Button;
