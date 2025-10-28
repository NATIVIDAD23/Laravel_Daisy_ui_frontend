export function Select ({ className = '', ...props }) {
    return (
        <select
            {...props}
            className={
                'select ' +
                className
            }
        />
    );
}
