class MastodonCar{
    useGPS(){
        throw new Error('Method not implement');
    }
}
class RhinoCar{
    useGPS(){
        throw new Error('Method not implement');
    }
}

class MastodonSedanCar extends MastodonCar{
    useGPS(){
        console.log('[Sedan] Mastodon GPS');
    }
}
class MastodonHatchbackCar extends MastodonCar{
    useGPS(){
        console.log('[Hatchback] Mastodon GPS');
    }
}

class RhinoSedanCar extends RhinoCar{
    useGPS(){
        console.log('[Sedan] Rhino GPS');
    }
}
class RhinoHatchbackCar extends RhinoCar{
    useGPS(){
        console.log('[Hatchback] Rhino GPS');
    }
}

class CarAbstractFactory{
    createMastodon(){
        throw new Error('Method not implement');
    }

    crateRhino(){
        throw new Error('Method not implement');
    }
}

class SedanCarFactory{
    createMastodon(){
        return new MastodonSedanCar();
    }
    createRhino(){
        return new RhinoSedanCar();
    }
}

class HatchbackCarFactory{
    createMastodon(){
        return new MastodonHatchbackCar();
    }
    createRhino(){
        return new RhinoHatchbackCar();
    }
}

//testear
function appCarFactory(factory) {
    const mastodon = factory.createMastodon();
    const rhino = factory.createRhino();

    mastodon.useGPS();
    rhino.useGPS();
}
appCarFactory(new HatchbackCarFactory())
appCarFactory(new SedanCarFactory())