export function Textarea({ className = '', ...props }) {
    return (
        <textarea
            {...props}
            className={
                'textarea ' +
                className
            }
        />
    );
}
