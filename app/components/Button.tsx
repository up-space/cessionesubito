interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant?: 'primary' | 'white';
    contrast?: boolean;
    href?: string;
}

export default function Button({ text, variant = 'primary', contrast = false, href, className = '', ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center p-4 px-6 rounded-full transition-all duration-150 font-medium relative whitespace-nowrap transform hover:-translate-y-0.5";
    const variants = {
        primary: `
            bg-gradient-to-b from-[#40BFEF] to-[#40BFEF]/95
            text-white 
            border border-[#2EA8D8]/20
            shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),0_2px_4px_rgba(45,166,189,0.15),0_1px_2px_rgba(45,166,189,0.15)]
            hover:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),0_4px_8px_rgba(45,166,189,0.2),0_2px_4px_rgba(45,166,189,0.15)]
            hover:from-[#51C7F2] hover:to-[#51C7F2]/95
            active:from-[#2EA8D8] active:to-[#2EA8D8]/95
            active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]
            active:translate-y-1
            active:hover:translate-y-1
            after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-b 
            after:from-white/10 after:to-transparent after:pointer-events-none
        `,
        white: `
            bg-gradient-to-b from-[#003B7E] to-[#003B7E]/95
            text-white 
            border border-[#002B5E]/20
            shadow-[inset_0_1px_0px_rgba(255,255,255,0.2),0_2px_4px_rgba(0,59,126,0.15),0_1px_2px_rgba(0,59,126,0.15)]
            hover:shadow-[inset_0_1px_0px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,59,126,0.2),0_2px_4px_rgba(0,59,126,0.15)]
            hover:from-[#004491] hover:to-[#004491]/95
            active:from-[#002B5E] active:to-[#002B5E]/95
            active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]
            active:translate-y-1
            active:hover:translate-y-1
            after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-b 
            after:from-white/10 after:to-transparent after:pointer-events-none
        `
    };

    if (href) {
        return (
            <a
                href={href}
                className={`${baseStyles} ${variants[variant]} ${className}`}
            >
                {text}
            </a>
        );
    }

    return (
        <button
            {...props}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {text}
        </button>
    );
}