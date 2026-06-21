import Link from "next/link"

const BLOG_URL = "http://thecontraction.vercel.app"

const Paper = (props: { name: string, date: string, blog_route: string }) => {
    return (
        <li style={{ display: 'flex', justifyContent: 'space-between' }} >
            <Link href={new URL(BLOG_URL + "/" + props.blog_route).toString()} className="font-medium" style={{ margin: '1px' }}>{props.name} </Link>
            <span>{props.date}</span>
        </li>
    )

}

const papers = [
    { name: "Tensors-II", date: "April 7 2026", blog_route: "paper/tensors-II" },
    { name: "Tensors-I", date: "April 7 2026", blog_route: "paper/tensors-I" },
    { name: "Backpropogation with Tensors", date: "March 1 2026", blog_route: "paper/tensor-backprop" },
    { name: "A Steady State Incompressible Fluid Flow Solver using the SIMPLE method", date: "February 1 2025", blog_route: 'paper/fluid-flow-solver' }
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

