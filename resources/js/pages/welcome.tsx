import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

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
            <div className="flex justify-center px-6 py-8">
                <div className="grid w-full max-w-[1600px] grid-cols-1 gap-8 md:grid-cols-[5fr_2fr]">
                    <div className="relative w-full overflow-hidden rounded-xl">Bike goes here...</div>
                    <div className="w-full">
                        <Card className="sticky top-10 w-full p-6 shadow-lg">
                            <CardHeader className="space-y-2 p-0">
                                <CardTitle className="text-2xl">Configure your Brompton</CardTitle>
                                <CardDescription className="text-sm">Choose your style and components</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6 p-0">{/* Selectors go here... */}</CardContent>
                            <CardFooter className="flex flex-col items-start gap-4 border-t p-0 pt-4">
                                <div className="flex w-full items-center justify-between">
                                    <div>
                                        <div className="relative text-xl font-semibold">£2150.00</div>
                                    </div>
                                    <Button size="lg" className="ml-auto">
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
