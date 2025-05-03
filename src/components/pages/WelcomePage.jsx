import FormIdentitas from "../FormIdentitas";

export default function WelcomePage({
    identitas,
    setIdentitas,
    handleLevelChange,
    level,
}) {
    return (
        <>
            <FormIdentitas
                identitas={identitas}
                setIdentitas={setIdentitas}
                handleLevelChange={handleLevelChange}
                level={level}
            />
            <p className="absolute bottom-2 right-2 text-sm text-gray-500">
                Website created by <a className="font-bold text-blue-950" href="https://github.com/Gefila" target="_blank">Gefila Zona Pranata</a>
            </p>
        </>
    );
}
