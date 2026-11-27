import Card from "./Card";
function Mobiles(){
    return(
        <>
        <h1>Mobiles</h1>
        <div className="box1">
            <Card name="Samsung" image="https://img-prd-pim.poorvika.com/prodvarval/samsung-galaxy-z-fold-6-5g-navy-512gb-12gb-ram-thumbnail.png" price="1,74,999" />
            <Card name="Vivo" image="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1668998730236/7538d6a719b92ea17e5b64f893d823ca.png" price="94,999" />
            <Card name="Oppo" image="https://gogizmo.in/wp-content/uploads/2025/12/4-1-600x525.png" price="86,999" />
        </div>
        </>
    )
}
export default Mobiles;