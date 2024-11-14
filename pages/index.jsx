import TrollTelephoneNumberSelector from "../components/Toll/TrollTelephoneNumberSelector";

export default function index() {

    return (
    
    <>
    <div className="flex flex-row gap-1">
        <TrollTelephoneNumberSelector wantedDigits={2} hasPlus={true}/>
        <TrollTelephoneNumberSelector wantedDigits={3}/>
        <TrollTelephoneNumberSelector wantedDigits={3}/>
        <TrollTelephoneNumberSelector wantedDigits={4}/>

    </div>

    </>
    
    )
}