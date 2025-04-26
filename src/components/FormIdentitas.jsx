import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import RadioGender from "./RadioGender";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function FormIdentitas({
    identitas,
    setIdentitas,
    handleLevelChange,
    level,
}) {
    function handleOnChange(e) {
        const { name, value } = e.target;
        setIdentitas((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <Card className="w-[650px] max-md:w-[95%] bg-secondary-background my-auto">
            <CardHeader>
                <CardTitle className="text-center text-2xl max-md:text-xl">
                    KUISIONER PEMILIHAN E-WALLET TERBAIK UNTUK TRANSAKSI DIGITAL
                    BAGI MAHASISWA
                </CardTitle>
                <CardDescription className="text-justify text-sm text-muted-foreground max-md:hidden">
                    Di era digital saat ini, dompet elektronik (e-wallet) telah
                    menjadi bagian penting dalam kehidupan mahasiswa, memberikan
                    kemudahan, kecepatan, dan berbagai fitur menarik dalam
                    transaksi sehari-hari. E-wallet digunakan untuk berbagai
                    kebutuhan, mulai dari pembayaran biaya kuliah, belanja,
                    hingga transaksi antar teman. Namun, dengan banyaknya
                    pilihan e-wallet yang tersedia di Indonesia, mahasiswa
                    sering kali bingung memilih yang paling sesuai dengan
                    kebutuhan mereka. Setiap e-wallet menawarkan berbagai
                    keunggulan, seperti cashback, integrasi layanan, dan promosi
                    menarik, yang dapat berbeda antar satu aplikasi dengan
                    lainnya. Pemilihan e-wallet yang tepat sangat penting,
                    karena langsung berkaitan dengan pengelolaan uang yang
                    digunakan dalam kehidupan sehari-hari. Kesalahan dalam
                    memilih e-wallet dapat berdampak pada pengelolaan keuangan
                    yang tidak efisien hingga kerugian finansial. Oleh karena
                    itu, penting untuk mengetahui faktor-faktor yang memengaruhi
                    keputusan mahasiswa dalam memilih e-wallet. Melalui
                    kuisioner ini, kami bertujuan untuk mengumpulkan data
                    mengenai preferensi mahasiswa terkait penggunaan e-wallet.
                    Informasi yang terkumpul akan menjadi dasar dalam penelitian
                    untuk menentukan e-wallet terbaik yang dapat memenuhi
                    kebutuhan transaksi digital mahasiswa. Kami sangat
                    menghargai partisipasi Bapak/Ibu dalam mengisi kuisioner
                    ini, atas perhatiannya kami ucapkan terima kasih.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="nama">Nama</Label>
                            <Input
                                id="nama"
                                placeholder="Masukkan Nama"
                                onChange={handleOnChange}
                                value={identitas.nama}
                                name="nama"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="asalKampus">Asal Kampus</Label>
                            <Input
                                id="asalKampus"
                                placeholder="Masukkan Asal Kampus"
                                onChange={handleOnChange}
                                value={identitas.asalKampus}
                                name="asalKampus"
                            />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
                            <RadioGroup
                                onValueChange={(value) => {
                                    setIdentitas((prev) => ({
                                        ...prev,
                                        jenisKelamin: value,
                                    }));
                                }}
                                value={identitas.jenisKelamin}
                                name="jenisKelamin"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Pria" id="pria" />
                                    <Label htmlFor="pria">Pria</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="Wanita"
                                        id="wanita"
                                    />
                                    <Label htmlFor="wanita">Wanita</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button
                    className="w-full"
                    onClick={() => handleLevelChange(level)}
                    disabled={
                        identitas.nama === "" ||
                        identitas.asalKampus === "" ||
                        identitas.jenisKelamin === ""
                    }
                >
                    Mulai Kuesioner
                </Button>
            </CardFooter>
        </Card>
    );
}
