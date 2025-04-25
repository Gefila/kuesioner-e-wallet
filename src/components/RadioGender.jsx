import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGender({onChange, value, name}) {
    return (
        <RadioGroup onChange={onChange} value={value} name={name}>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="pria" id="pria" />
                <Label htmlFor="pria">Pria</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="wanita" id="wanita" />
                <Label htmlFor="wanita">Wanita</Label>
            </div>
        </RadioGroup>
    );
}
