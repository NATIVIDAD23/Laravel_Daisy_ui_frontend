import { X } from "lucide-react";

export default function Modal({
    children,
    show = false,
    maxWidth = '2xl',
    closeable = true,
    onClose = () => {},
}) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
    }[maxWidth];

    if (!show) return null;

    return (
        <div className="modal modal-open">
            <div className={`modal-box ${maxWidthClass} relative p-0`}>
                {/* Close Button */}
                {closeable && (
                    <button
                        onClick={close}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}

                {/* Content */}
                {children}
            </div>

            {/* Backdrop */}
            <div
                className="modal-backdrop"
                onClick={close}
            >
                <button>close</button>
            </div>
        </div>
    );
}
