

export default async function () {
        let go = await import('./imported');
        return go(); 
    };

