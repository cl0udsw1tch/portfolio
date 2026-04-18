export default function Projects() {
    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-semibold">Projects</h1>
            <ul style={{ listStyleType: 'square' }}>
                <li>
                    <h2 className="text-blue-400 ont-medium">LSTM Time Complexity Classifier</h2>
                    <ul className="text-sm" style={{ listStyleType: 'circle' }}>
                        <li>
                            Uses a Long Short Term Memory model to predict the time complexity of Java code snippets </li>
                        <li> Proof of concept demostrating the applicability of LSTMs in the age of the transformer architecture, though ideally an LLM would be used for such a task </li>
                        <li>Includes a Java parser to prepare samples into abstract syntax trees, a more regular way of representing tokens</li>
                    </ul>
                    <a className="text-amber-600" href='https://github.com/cl0udsw1tch/AI-TCP' target='_blank' rel='noreferrer noopener'>
                        code
                    </a>
                </li>
                <br /><br />
                <li>
                    <h2 className="text-blue-400 ont-medium">Navier Stokers Solver</h2>
                    <ul className="text-sm" style={{ listStyleType: 'circle' }}>
                        <li>
                            2D Laminar Steady State Fluid Flow Simulation </li>

                        <li>  Used the finite difference method to create an object-oriented way of solving fluid flow problems
                            in python.
                        </li>
                    </ul>
                    <a className="text-amber-600" href='https://github.com/cl0udsw1tch/NavierStokesSolver' target='_blank' rel='noreferrer noopener'>
                        code
                    </a>

                </li>

                <br /><br />
                <li>
                    <h2 className="text-blue-400 ont-medium">AI Manipulator</h2>
                    <ul className="text-sm" style={{ listStyleType: 'circle' }}>
                        <li>
                            Manipulates OpenGL rendering with a live webcam </li>
                        <li>
                            Enables manipulation of rendered Blender models via hand signs read by your webcame and processed by a CNN model. It`&apos;`s comprised of two parts, the model code (HandSigns Classifier) and the rendering code (Graphics Engine). </li>
                        <li>CNN self-built for teaching purposes, can be modified to include prebuilt models </li>
                    </ul>
                    <a className="text-amber-600" href='https://github.com/cl0udsw1tch/aim' target='_blank' rel='noreferrer noopener'>
                        code
                    </a>

                </li>
                <br /><br />
                <li>
                    <h2 className="text-blue-400 ont-medium">Layer 1 Blockchain</h2>
                    <ul className="text-sm" style={{ listStyleType: 'circle' }}>
                        <li>
                            A minimal Golang implementation of the Bitcoin Improvement Protocols </li>
                        <li>Cryptographic hashing and signature verficiation for implementing a distributed ledger</li>
                        <li>Creates a mesh network of nodes, uses UDP-holepunching for the nodes to update a neighbor table of ip addresses</li>
                        <li>Minimal client implementation to send serialized transactions to the network</li>
                        <li>Proof of work to verify block creation</li>
                    </ul>
                    <a className="text-amber-600" href='https://github.com/cl0udsw1tch/blockchain' target='_blank' rel='noreferrer noopener'>
                        code
                    </a>

                </li>
                <br /><br />
                <li>
                    <h2 className="text-blue-400 ont-medium">Stock ticker chart plugin for Vim/Neovim</h2>
                    <ul className="text-sm" style={{ listStyleType: 'circle' }}>
                        <li>An exercise in mastering an old scripting language (vimscript) to implement a rather complex plugin</li>
                        <li>Implemented stream and iterator functionality to handle incoming stock data from a spawned child process</li>
                        <li>Asynchronous data retrieval so the user may use the editor with its single-threaded environment while the plugin runs</li>
                    </ul>
                    <a className="text-amber-600" href='https://github.com/cl0udsw1tch/vim-ticker' target='_blank' rel='noreferrer noopener'>
                        code
                    </a>

                </li>
            </ul>
        </div>

    );
}


