export default function User() {
    return (
        <div>
            <h1>Generate Meta data user page</h1>
        </div>
    );
}
export function generateMetadata(){
    return{
        title: "user page title",
        descriptin: "User page"
    } 
}


//old version 13 before me head component hota h us sy hum dynamic meta data generate kr skty h 
//11 after 1 generate meta data use krty h 


//Meta Data: Website ke SEO k ander use hota h. title ko be meta data k ander consider kia h jata h. is k ander descriptin, title and key jesy keywords hoty h jo k seo me help krty h. Ex E commerce website
//Dynamic Meta data: jb be different pages k lehaz sy meta data set krty h o ye hota h means ek page k upper aptop, mobile stc to ussi k lehaz sy description set kry gy.
//abi jo cnsole par meta data a ha h vo manually h jo layout.js me likha hwa h or yesb me same dekhy ga 