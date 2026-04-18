import Link from "next/link"

const BLOG_URL = "http://tech0.vercel.app"

const Paper = (props: { name: string, date: string, blog_route: string }) => {
    return (
        <li >
            <Link href={new URL(BLOG_URL + "/" + props.blog_route).toString()} className="font-medium" style={{ margin: '10px' }}>{props.name} ({props.date})</Link>
        </li>
    )

}

const papers = [
    { name: "Backpropogation with Tensors", date: "March 1 2026", blog_route: "tensor-backprop" },
    { name: "A Steady State Incompressible Fluid Flow Solver using the SIMPLE method", date: "February 1 2025", blog_route: 'fluid-flow-solver' }
]

export default function Papers() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Papers</h1>
            <ul style={{ listStyleType: 'circle' }}>
                {papers.map((k) => <Paper name={k.name} date={k.date} blog_route={k.blog_route} key={k.name} />)}

            </ul>
        </div>
    );
}

