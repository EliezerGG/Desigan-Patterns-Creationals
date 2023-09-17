class CarProductionLine {
    setAirBags(airBagsNumber){
        throw new Error ('Method not implemente');
    }
    setColor(color){
        throw new Error ('Method not implemente');
    }
    setEdition(edition){
        throw new Error ('Method not implemente');
    }
    resetProductLine(){
        throw new Error ('Method not implemente');
    }
}

class SedanProductionLine extends CarProductionLine{
    constructor({model}){
        super();
        this.setInternalModel(model);
        this.resetProductLine();
    }
    setAirBags(howMany){
        this.sedanCar.airBags = howMany;
        return this;
    }
    setColor(color){
        this.sedanCar.color = color;
        return this;
    }
    setEdition(edition){
        this.sedanCar.edition = edition;
        return this;
    }

    setInternalModel(model){
        this.internalModel = model;
    }
    setModel(){
        this.sedanCar.model = 'sedan';
    }

    resetProductLine(){
        this.sedanCar = this.internalModel === 'mastodon' ? new MastodonCar() : new RhinoCar();
    }

    build(){
        this.setModel();
        const sedanCar = this.sedanCar;
        this.resetProductLine();
        return sedanCar;
    }
}

class Car{
    constructor(){
        this._edition ='';
        this._model='';
        this._ariBags=2;
        this._color = 'black';
    }
    set airBags(howMany){
        this._ariBags = howMany;
    }
    set color(color){
        this._color = color;
    }
    set edition(edition){
        this._edition = edition;
    }
    set model(model){
        this._model = model;
    }
}
class MastodonCar extends Car{
    constructor(){
        super();
    }
}

class RhinoCar extends Car{
    constructor(){
        super();
    }
}

class Director{
    setproductionLine(productionLine){
        this.productionLine = productionLine;
    }
    constructCvtEdition(){
        this.productionLine.setAirBags(4).setColor('blue').setEdition('CVT');
    }
    constructSignatureEdition(){
        this.productionLine.setAirBags(8).setColor('red').setEdition('Signature');
    }
}

function appBuilder(director){
    const mastodonSedanProductionLine = new SedanProductionLine({
        model: 'mastodon',
    });
    director.setproductionLine(mastodonSedanProductionLine);
    director.constructCvtEdition();
    const mastodonSedanCvt = mastodonSedanProductionLine.build();

    console.log(mastodonSedanCvt);
}

appBuilder(new Director());
appBuilder(new Director())