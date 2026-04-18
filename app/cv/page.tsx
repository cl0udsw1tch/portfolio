

// app/cv/page.tsx
export default function CV() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">CV</h1>

            <section>
                <h2 className="font-medium">Education</h2>
                <p>University of Toronto — Master&apos;s in Engineering — 2023-2025</p>
            </section>

            <section>
                <h2 className="font-medium">Experience</h2>
                <p>SWE - LeddarTech - 2023-2024</p>
            </section>

            <section>
                <h2 className="font-medium">Skills</h2>
                <p>C++, Go, Java, Bash, React, NextJS, TypeScript</p>
            </section>

            <a href="./CV_base.pdf" target="_blank" className="underline">
                Download PDF
            </a>
        </div>
    );
}



