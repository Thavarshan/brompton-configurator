import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [config, setConfig] = useState<any>({
        line: 'c-line',
        speed: '6-speed',
        color: 'black',
        handlebar: 'mid',
        seatpost: 'short',
        saddle: 'standard',
        rack: 'e',
        customColor: '',
    });

    return (
        <>
            <Head title="Configure Your Brompton" />
            <div className="py-8 px-6 flex justify-center">
                <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-[5fr_2fr] gap-8">
                    <div className="relative w-full rounded-xl overflow-hidden">
                        Bike goes here...
                    </div>
                    <div className="w-full">
                        <Card className="sticky top-10 w-full shadow-lg p-6">
                            <CardHeader className="p-0 space-y-2">
                                <CardTitle className="text-2xl">Configure your Brompton</CardTitle>
                                <CardDescription className="text-sm">
                                    Choose your style and components
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0 space-y-6">
                                {/* Selectors go here... */}
                            </CardContent>
                            <CardFooter className="flex flex-col gap-4 items-start p-0 pt-4 border-t">
                                <div className="flex justify-between w-full items-center">
                                    <div>
                                        <div className="text-xl font-semibold relative">
                                            £2150.00
                                        </div>
                                    </div>
                                    <Button
                                        size="lg"
                                        className="ml-auto">
                                        Add to cart
                                    </Button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button size="icon" variant="outline">
                                        −
                                    </Button>
                                    <span className="w-6 text-center">1</span>
                                    <Button size="icon" variant="outline">
                                        +
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
