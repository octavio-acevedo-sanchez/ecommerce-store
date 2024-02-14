interface ContainerProps {
	children: React.ReactNode;
}

const Container = ({ children }: ContainerProps): React.ReactNode => {
	return <div className='mx-auto max-w-7xl'>{children}</div>;
};

export default Container;
