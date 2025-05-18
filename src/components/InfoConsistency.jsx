import { Button } from "./ui/button";

export default function InfoConsistency({ data }) {
    if (!data)
        return (
            <Button
                className="self-end bg-secondary-background max-md:w-[35%] max-md:text-xs h-auto p-1.5"
                size={"sm"}
            >
                <p className="text-wrap">Inconsistency : ...</p>
            </Button>
        );
    const { isConsistent, CR } = data;
    return (
        <Button
            className={`self-end bg-secondary-background  max-md:w-[35%] max-md:text-xs h-auto p-1.5  ${
                !isConsistent ? "bg-red-500" : ""
            }`}
            size={"sm"}
        >
            <p className="text-wrap">Inconsistency : {CR}</p>
        </Button>
    );
}
