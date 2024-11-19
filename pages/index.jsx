import TrollTelephoneNumberSelector from "../components/Troll/TrollTelephoneNumberSelector";
import TrollVolume from "../components/TrollVolume";
import Volume from "../components/Volume";

export default function index() {

    return (

    
    <>
        <div className="flex flex-auto">
            <TrollVolume/>
            <Volume/>
            <div className="flex flex-row gap-1">
                <TrollTelephoneNumberSelector wantedDigits={2} hasPlus={true}/>
                <TrollTelephoneNumberSelector wantedDigits={3}/>
                <TrollTelephoneNumberSelector wantedDigits={3}/>
                <TrollTelephoneNumberSelector wantedDigits={4}/>
            </div>
        </div>
    </>
    
    )
}