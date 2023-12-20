export const H1 = ({ children }) => (
    <h1 className="text-[64px] leading-none font-medium tracking-tight">{children}</h1>
)
export const H2 = ({ children }) => (
    <h2 className="">{children}</h2>
)
export const P = ({ className, children }) => (
    <p className={"font-normal text-xl " + className}>{children}</p>
)