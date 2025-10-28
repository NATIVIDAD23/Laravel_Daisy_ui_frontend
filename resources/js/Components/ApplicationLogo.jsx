export default function ApplicationLogo({logo, props}) {
    return (
        <>
            <img src={logo} alt="Logo" className="w-20 h-10"  {...props}/>
        </>
    );
}
