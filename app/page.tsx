import Image from "next/image";
export default function Home() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-6">

                <Image
                    src="/pfp.png"
                    alt="Profile"
                    width={120}
                    height={120}
                    className="rounded-full"
                />

                <div>
                    <h1 className="text-3xl font-semibold">
                        Nurein Marchesano Umeya
                    </h1>

                    <p className="text-gray-600">
                        Master&apos;s of Engineering
                    </p>

                    <p className="text-gray-600">
                        University of Toronto
                    </p>

                    <p className="mt-2">
                        nurein.umeya@mail.utoronto.ca
                    </p>

                    <div className="flex gap-4 mt-2">
                        <a href="https://github.com/cl0udsw1tch" className="underline">
                            GitHub
                        </a>

                        <a href="/cv" className="underline">
                            CV
                        </a>

                        <a href="/papers" className="underline">
                            Papers
                        </a>
                        <a href="/projects" className="underline">
                            Projects
                        </a>
                    </div>

                </div>

            </div>
            <p className="text-blue-400">
                As a network, systems, and LLM software engineer from Toronto, Canada, I work with kernels, GPUs, and ML models in Linux, C++ and Python.
            </p>
            <p>New Graduate from University of Toronto, Masters recieved on November 2025</p>
            <p>
                You may also find some maths/engineering work here, as I frequently enjoy [reading/practicing/simulating...] artifacts from pure maths and many engineering subfields.
            </p>
        </div>
    );
}

