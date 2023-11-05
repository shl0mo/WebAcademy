class Product {
	private model : string = ''
	private maker : string = ''
	private price : number = 0

	constructor (model : string, maker : string, price : number) {
		this.setModel(model)
		this.setMaker(maker)
		this.setPrice(price)
	}

	public setModel (model : string) : void {
		this.model = model
	}

	public setMaker (maker : string) : void {
		this.maker = maker
	}

	public setPrice (price : number) : void {
		this.price = price
	}

	public getModel () : string {
		return this.model
	}

	public getMaker () : string {
		return this.maker
	}

	public getPrice () : number {
		return this.price
	}
}

class TV extends Product {
	private resolution : number = 0
	private inches : number = 0

	constructor (
		model : string,
		maker : string,
		price : number,
		resolution : number,
		inches: number,
	) {
		super(model, maker, price)
		this.setResolution(resolution)
		this.setInches(inches)
	}

	public setResolution (resolution : number) : void {
		this.resolution = resolution
	}

	public setInches (inches : number) : void {
		this.inches = inches
	}

	public getResolution () : number {
		return this.resolution
	}

	public getInches () : number {
		return this.inches
	}
}

class Cellphone extends Product {
	private memory : number = 0

	constructor (
		model : string,
		maker : string,
		price : number,
		memory : number
	) {
		super(model, maker, price)
		this.setMemory(memory)
	}

	public setMemory (memory : number) : void {
		this.memory = memory
	}

	public getMemory () : number {
		return this.memory
	}
}

class Bike extends Product {
	private rim_size : number = 0

	constructor (
		model : string,
		maker : string,
		price : number,
		rim_size : number
	) {
		super(model, maker, price)
		this.setRimSize(rim_size)
	}

	public setRimSize (rim_size : number) : void {
		this.rim_size = rim_size
	}

	public getRimSize () : number {
		return this.rim_size
	}
}

class Cart {
	private products : Product[] = []

	constructor (products : Product[]) {
		this.setProducts(products)
	}

	public setProducts (products : Product[]) : void {
		this.products = products
	}
	
	public getProducts () : Product[] {
		return this.products
	}

	public sumProductsPrices () : number {
		let sum_prices : number = 0
		for (const product of this.getProducts())  {
			sum_prices = sum_prices + product.getPrice()
		}
		return sum_prices
	}
}

function defineFormFields() {
	const select_product = this
	let container_form_inputs : HTMLElement = (<HTMLElement>document.querySelector('#container-form-inputs'))
	const product : string = select_product.value
	if (product === 'TV') {
		container_form_inputs.innerHTML = `
			<div class="form-group mb-3">
				<label for="input-model">Modelo</label>
				<input type="text" class="form-control" id="input-model" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-resolution">Resolução</label>
				<input type="number" class="form-control" id="input-resolution" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-inches">Polegadas</label>
				<input type="number" class="form-control" id="input-inches" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-maker">Fabricante</label>
				<input type="text" class="form-control" id="input-maker" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-price">Valor</label>
				<input type="number" class="form-control" id="input-price" required>
			</div>
			<button type="button" class="btn btn-dark w-100" id="modal-add-button">Adicionar</button>
		`
		const modal_add_button : HTMLElement = (<HTMLInputElement>document.querySelector('#modal-add-button'))
		modal_add_button.addEventListener('click', addProduct, false)
	} else if (product === 'Celular') {
		container_form_inputs.innerHTML = `
			<div class="form-group mb-3">
				<label for="input-model">Modelo</label>
				<input type="text" class="form-control" id="input-model" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-memory">Memória</label>
				<input type="number" class="form-control" id="input-memory" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-inches">Polegadas</label>
				<input type="number" class="form-control" id="input-inches" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-maker">Fabricante</label>
				<input type="text" class="form-control" id="input-maker" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-price">Valor</label>
				<input type="number" class="form-control" id="input-price" required>
			</div>
			<button type="button" class="btn btn-dark w-100" id="modal-add-button">Adicionar</button>
		`
		const modal_add_button : HTMLElement = (<HTMLInputElement>document.querySelector('#modal-add-button'))
		modal_add_button.addEventListener('click', addProduct, false)
	} else if (product === 'Bicicleta') {
		container_form_inputs.innerHTML = `
			<div class="form-group mb-3">
				<label for="input-model">Modelo</label>
				<input type="text" class="form-control" id="input-model" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-rim-size">Tamanho do aro</label>
				<input type="number" class="form-control" id="input-rim-size" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-maker">Fabricante</label>
				<input type="text" class="form-control" id="input-maker" required>
			</div>
			<div class="form-group mb-3">
				<label for="input-price">Valor</label>
				<input type="number" class="form-control" id="input-price" required>
			</div>
			<button type="button" class="btn btn-dark w-100" id="modal-add-button">Adicionar</button>
		`
		const modal_add_button : HTMLElement = (<HTMLInputElement>document.querySelector('#modal-add-button'))
		modal_add_button.addEventListener('click', addProduct, false)
	} else if (product === '-- Selecione --') {
		container_form_inputs.innerHTML = ''	
	}
}

const addProduct = () => {
	const product : string = (<HTMLInputElement>document.querySelector('#select-product')).value
	const model : string = (<HTMLInputElement>document.querySelector('#input-model')).value
	const maker : string = (<HTMLInputElement>document.querySelector('#input-maker')).value
	const price : number = parseFloat((<HTMLInputElement>document.querySelector('#input-price')).value)
	const input_shipping_total : HTMLInputElement= (<HTMLInputElement>document.querySelector('#input-shipping-total'))
	const products = cart.getProducts()
	if (product === 'TV') {
		const resolution : number = parseFloat((<HTMLInputElement>document.querySelector('#input-resolution')).value)
		const inches : number = parseFloat((<HTMLInputElement>document.querySelector('#input-inches')).value)
		const new_TV : Product = new TV(model, maker, price, resolution, inches)
		products.push(new_TV)
		const sum_products_prices = cart.sumProductsPrices()
		input_shipping_total.value = 'R$ ' + String(sum_products_prices)
	} else if (product === 'Celular') {
		const memory : number = parseFloat((<HTMLInputElement>document.querySelector('#input-memory')).value)
		const new_cellphone : Product = new Cellphone(model, maker, price, memory)
		products.push(new_cellphone)
		const sum_products_prices = cart.sumProductsPrices()
		input_shipping_total.value = 'R$ ' + String(sum_products_prices)
	} else if (product === 'Bicicleta') {
		const rim_size : number = parseFloat((<HTMLInputElement>document.querySelector('#input-rim-size')).value)
		const new_bike : Product = new Bike(model, maker, price, rim_size)
		products.push(new_bike)
		const sum_products_prices = cart.sumProductsPrices()
		input_shipping_total.value = 'R$ ' + String(sum_products_prices)
	} else if (product === '-- Selecione --') {
		alert('Selecione um produto')
		return
	}

}


const products : Product[] = []
const cart = new Cart(products)
const select_product : HTMLInputElement = (<HTMLInputElement>document.querySelector('#select-product'))
select_product.addEventListener('change', defineFormFields, false)
