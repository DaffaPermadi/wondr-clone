export default function AboutLayout({children}){
    return(
        <div className="flex flex-wrap w-full items-center justify-between">
            <h1>Ini halaman About</h1>
            {children}
        </div>
    )
    
}