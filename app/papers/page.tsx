import Link from "next/link"

const BLOG_URL = "http://example.com"

const Paper = (props: { name: string, date: string }) => {
    return (
        <li >
            <Link href={new URL(BLOG_URL + "/" + props.name).toString()} className="font-medium" style={{ margin: '10px' }}>{props.name} ({props.date})</Link>
        </li>
    )

}

const papers = [
    { name: "Backpropogation with Tensors", date: "March 1 2026" },
    { name: "A Steady State Incompressible Fluid Flow Solver using the SIMPLE method", date: "February 1 2025" }
]

export default function Papers() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Papers</h1>
            <ul style={{ listStyleType: 'circle' }}>
                {papers.map((k) => <Paper name={k.name} date={k.date} key={k.name} />)}

            </ul>
        </div>
    );
}

