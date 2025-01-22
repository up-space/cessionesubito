import Button from "./Button";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#003B7E]/10 to-transparent pointer-events-none" />
            
            {/* Content */}
            <div className="relative">
                <h1 className="text-6xl md:text-7xl font-bold mb-6">
                    <span className="text-[#40BFEF]">Se non hai trovato</span>
                    <br />
                    <span className="text-[#003B7E]">ciò che cercavi</span>
                </h1>
                
                <p className="text-[#003B7E]/80 max-w-3xl mb-10 text-lg">
                    Contattaci per scoprire le diverse soluzioni di credito disponibili per te! Oltre alla cessione del quinto siamo anche in grado di offrirti un'ampia gamma di prestiti personali e finanziamenti su misura per te!
                </p>

                <Link href="/contatti">
                    <Button text="Contatta il nostro team" variant="primary" />
                </Link>
            </div>
        </section>
    );
} 