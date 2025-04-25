import FormIdentitas from "../FormIdentitas";

export default function WelcomePage({ identitas, setIdentitas }) {
    return (
        <div className="dark flex flex-col items-center justify-center min-h-screen">
            <FormIdentitas identitas={identitas} setIdentitas={setIdentitas}/>
        </div>
    );
}
