import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function DialogPetunjuk({ isOpenModal, setIsOpenModal }) {
    return (
        <AlertDialog open={isOpenModal} onOpenChange={setIsOpenModal}>
            {!isOpenModal && (
                <AlertDialogTrigger asChild>
                    <Button>Petunjuk Pengisian</Button>
                </AlertDialogTrigger>
            )}
            <AlertDialogContent className="min-w-[80%]">
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Petunjuk Pengisian Kuesioner
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <img
                            src="/petunjuk pengisian.jpeg"
                            alt="Petunjuk Pengisian Kuesioner"
                            className="w-full max-w-full"
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
