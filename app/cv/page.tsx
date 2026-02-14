

// app/cv/page.tsx
export default function CV() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">CV</h1>

            <section>
                <h2 className="font-medium">Education</h2>
                <p>University Name — Degree — Years</p>
            </section>

            <section>
                <h2 className="font-medium">Experience</h2>
                <p>Job Title — Company — Years</p>
            </section>

            <section>
                <h2 className="font-medium">Skills</h2>
                <p>React, Next.js, TypeScript, Tailwind CSS</p>
            </section>

            <a href="./CV_base.pdf" target="_blank" className="underline">
                Download PDF
            </a>
        </div>
    );
}



