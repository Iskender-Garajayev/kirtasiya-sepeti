

const carData = [
    {
        _id: '1',
        make: 'Toyota',
        year: '2013',
        model: 'Highlander Limited',
        bodyTyle: 'Sedan',
        fuelType: 'Gas',
        price: '21,998',
        kmmils: '118K',
        engin: '6-cyl, Gas, 3.5L',
        transmision: 'Automatic',
        images: {
            img: "",
            img2: 'https://img2.carmax.com/assets/24164720/image/8.jpg?width=400&height=300',
            img3: 'https://img2.carmax.com/assets/24164720/image/1.jpg?width=400&height=300',
            img4: 'https://img2.carmax.com/assets/24164720/image/3.jpg?width=400&height=300',
            img5: 'https://img2.carmax.com/assets/24164720/image/2.jpg?width=400&height=300',
            img6: 'https://img2.carmax.com/assets/24164720/image/4.jpg?width=400&height=300',
            img7: 'https://img2.carmax.com/assets/24164720/image/5.jpg?width=400&height=300',
            img8: 'https://img2.carmax.com/assets/24164720/image/6.jpg?width=400&height=300',
            img9: 'https://img2.carmax.com/assets/24164720/image/7.jpg?width=400&height=300',
            img10: 'https://img2.carmax.com/assets/24164720/image/8.jpg?width=400&height=300',
            img11: 'https://img2.carmax.com/assets/24164720/image/16.jpg?width=400&height=300',
            img12: 'https://img2.carmax.com/assets/24164720/image/10.jpg?width=400&height=300',
            img13: 'https://img2.carmax.com/assets/24164720/image/11.jpg?width=400&height=300',
            img14: 'https://img2.carmax.com/assets/24164720/image/12.jpg?width=400&height=300',
            img15: 'https://img2.carmax.com/assets/24164720/image/21.jpg?width=400&height=300',
        },

    },
    {
        _id: '2',
        make: 'Mercedes-Benz',
        year: '2018',
        model: 'C300',
        bodyTyle: 'Sedan',
        fuelType: 'Gas',
        price: '18,998',
        kmmils: '118K',
        engin: '4-cyl, Turbo Gas, 2.0L',
        transmision: 'Automatic',
        images: {
            img: 'https://img2.carmax.com/assets/24164701/image/hero.jpg?width=800&height=450s',
            img2: 'https://img2.carmax.com/assets/24164701/image/8.jpg?width=400&height=300',
            img3: 'https://img2.carmax.com/assets/24164701/image/1.jpg?width=400&height=300',
            img4: 'https://img2.carmax.com/assets/24164701/image/3.jpg?width=400&height=300',
            img5: 'https://img2.carmax.com/assets/24164701/image/2.jpg?width=400&height=300',
            img6: 'https://img2.carmax.com/assets/24164701/image/4.jpg?width=400&height=300',
            img7: 'https://img2.carmax.com/assets/24164701/image/5.jpg?width=400&height=300',
            img8: 'https://img2.carmax.com/assets/24164701/image/6.jpg?width=400&height=300',
            img9: 'https://img2.carmax.com/assets/24164701/image/7.jpg?width=400&height=300',
            img10: 'https://img2.carmax.com/assets/24164701/image/8.jpg?width=400&height=300',
            img11: 'https://img2.carmax.com/assets/24164701/image/16.jpg?width=400&height=300',
            img12: 'https://img2.carmax.com/assets/24164701/image/10.jpg?width=400&height=300',
            img13: 'https://img2.carmax.com/assets/24164701/image/11.jpg?width=400&height=300',
            img14: 'https://img2.carmax.com/assets/24164701/image/12.jpg?width=400&height=300',
            img15: 'https://img2.carmax.com/assets/24164701/image/21.jpg?width=400&height=300',
        },

    },
    {
        _id: '3',
        make: 'Ford',
        year: '2018',
        model: 'Mustang Mach-E GT',
        bodyTyle: 'Sedan',
        fuelType: 'Electric',
        price: '46,998',
        kmmils: '21K miles',
        engin: 'All Wheel Drive',
        transmision: 'Automatic',
        images: {
            img: 'https://img2.carmax.com/assets/23121165/image/hero.jpg?width=800&height=450',
            img2: 'https://img2.carmax.com/assets/23121165/image/8.jpg?width=400&height=300',
            img3: 'https://img2.carmax.com/assets/23121165/image/1.jpg?width=400&height=300',
            img4: 'https://img2.carmax.com/assets/23121165/image/3.jpg?width=400&height=300',
            img5: 'https://img2.carmax.com/assets/23121165/image/2.jpg?width=400&height=300',
            img6: 'https://img2.carmax.com/assets/23121165/image/4.jpg?width=400&height=300',
            img7: 'https://img2.carmax.com/assets/23121165/image/5.jpg?width=400&height=300',
            img8: 'https://img2.carmax.com/assets/23121165/image/6.jpg?width=400&height=300',
            img9: 'https://img2.carmax.com/assets/23121165/image/7.jpg?width=400&height=300',
            img10: 'https://img2.carmax.com/assets/23121165/image/8.jpg?width=400&height=300',
            img11: 'https://img2.carmax.com/assets/23121165/image/16.jpg?width=400&height=300',
            img12: 'https://img2.carmax.com/assets/23121165/image/10.jpg?width=400&height=300',
            img13: 'https://img2.carmax.com/assets/23121165/image/11.jpg?width=400&height=300',
            img14: 'https://img2.carmax.com/assets/23121165/image/12.jpg?width=400&height=300',
            img15: 'https://img2.carmax.com/assets/23121165/image/21.jpg?width=400&height=300',
        },

    },
    {
        _id: '4',
        make: 'Mercedes-Benz C300',
        year: '2018',
        model: 'Polo',
        bodyTyle: 'Sedan',
        fuelType: 'Gas',
        price: 234500,
        transmision: 'automatic',
        images: {
            img: 'https://img2.carmax.com/assets/24530817/image/hero.jpg?width=800&height=450',
            img2: 'https://img2.carmax.com/assets/24530817/image/8.jpg?width=400&height=300',
            img3: 'https://img2.carmax.com/assets/24530817/image/1.jpg?width=400&height=300',
            img4: 'https://img2.carmax.com/assets/24530817/image/3.jpg?width=400&height=300',
            img5: 'https://img2.carmax.com/assets/24530817/image/2.jpg?width=400&height=300',
            img6: 'https://img2.carmax.com/assets/24530817/image/4.jpg?width=400&height=300',
            img7: 'https://img2.carmax.com/assets/24530817/image/5.jpg?width=400&height=300',
            img8: 'https://img2.carmax.com/assets/24530817/image/6.jpg?width=400&height=300',
            img9: 'https://img2.carmax.com/assets/24530817/image/7.jpg?width=400&height=300',
            img10: 'https://img2.carmax.com/assets/24530817/image/8.jpg?width=400&height=300',
            img11: 'https://img2.carmax.com/assets/24530817/image/16.jpg?width=400&height=300',
            img12: 'https://img2.carmax.com/assets/24530817/image/10.jpg?width=400&height=300',
            img13: 'https://img2.carmax.com/assets/24530817/image/11.jpg?width=400&height=300',
            img14: 'https://img2.carmax.com/assets/24530817/image/12.jpg?width=400&height=300',
            img15: 'https://img2.carmax.com/assets/24530817/image/21.jpg?width=400&height=300',
        },

    },
    {
        _id: '4',
        make: 'Mercedes-Benz C300',
        year: '2018',
        model: 'Polo',
        bodyTyle: 'Sedan',
        fuelType: 'Gas',
        price: 234500,
        transmision: 'automatic',
        images: {
            img: 'https://img2.carmax.com/assets/24564103/image/hero.jpg?width=800&height=450',
            img2: 'https://img2.carmax.com/assets/24564103/image/8.jpg?width=400&height=300',
            img3: 'https://img2.carmax.com/assets/24564103/image/1.jpg?width=400&height=300',
            img4: 'https://img2.carmax.com/assets/24564103/image/3.jpg?width=400&height=300',
            img5: 'https://img2.carmax.com/assets/24564103/image/2.jpg?width=400&height=300',
            img6: 'https://img2.carmax.com/assets/24564103/image/4.jpg?width=400&height=300',
            img7: 'https://img2.carmax.com/assets/24564103/image/5.jpg?width=400&height=300',
            img8: 'https://img2.carmax.com/assets/24564103/image/6.jpg?width=400&height=300',
            img9: 'https://img2.carmax.com/assets/24564103/image/7.jpg?width=400&height=300',
            img10: 'https://img2.carmax.com/assets/24564103/image/8.jpg?width=400&height=300',
            img11: 'https://img2.carmax.com/assets/24564103/image/16.jpg?width=400&height=300',
            img12: 'https://img2.carmax.com/assets/24564103/image/10.jpg?width=400&height=300',
            img13: 'https://img2.carmax.com/assets/24564103/image/11.jpg?width=400&height=300',
            img14: 'https://img2.carmax.com/assets/24564103/image/12.jpg?width=400&height=300',
            img15: 'https://img2.carmax.com/assets/24564103/image/21.jpg?width=400&height=300',
        },

    },
    {
        _id: '4',
        make: 'ford',
        year: '2017',
        model: 'Ford F150 XLT',
        bodyTyle: 'Sedan',
        fuelType: 'Gas',
        price: 234500,
        transmision: 'automatic',
        images: {
            img: 'https://img2.carmax.com/assets/24036359/image/hero.jpg?width=800&height=450',
            img2: 'https://img2.carmax.com/assets/24036359/image/8.jpg?width=400&height=300',
            img3: 'https://img2.carmax.com/assets/24036359/image/1.jpg?width=400&height=300',
            img4: 'https://img2.carmax.com/assets/24036359/image/3.jpg?width=400&height=300',
            img5: 'https://img2.carmax.com/assets/24036359/image/2.jpg?width=400&height=300',
            img6: 'https://img2.carmax.com/assets/24036359/image/4.jpg?width=400&height=300',
            img7: 'https://img2.carmax.com/assets/24036359/image/5.jpg?width=400&height=300',
            img8: 'https://img2.carmax.com/assets/24036359/image/6.jpg?width=400&height=300',
            img9: 'https://img2.carmax.com/assets/24036359/image/7.jpg?width=400&height=300',
            img10: 'https://img2.carmax.com/assets/24036359/image/8.jpg?width=400&height=300',
            img11: 'https://img2.carmax.com/assets/24036359/image/16.jpg?width=400&height=300',
            img12: 'https://img2.carmax.com/assets/24036359/image/10.jpg?width=400&height=300',
            img13: 'https://img2.carmax.com/assets/24036359/image/11.jpg?width=400&height=300',
            img14: 'https://img2.carmax.com/assets/24036359/image/12.jpg?width=400&height=300',
            img15: 'https://img2.carmax.com/assets/24036359/image/21.jpg?width=400&height=300',
        },

    },
    {
        _id: '4',
        make: 'bmw',
        year: '2020',
        model: 'BMW 530 I',
        bodyTyle: 'Sedan',
        fuelType: 'Gas',
        price: '19.998',
        transmision: 'automatic',
        images: {
            img: 'https://img2.carmax.com/assets/24325520/image/hero.jpg?width=800&height=450',
            img2: 'https://img2.carmax.com/assets/24325520/image/8.jpg?width=400&height=300',
            img3: 'https://img2.carmax.com/assets/24325520/image/1.jpg?width=400&height=300',
            img4: 'https://img2.carmax.com/assets/24325520/image/3.jpg?width=400&height=300',
            img5: 'https://img2.carmax.com/assets/24325520/image/2.jpg?width=400&height=300',
            img6: 'https://img2.carmax.com/assets/24325520/image/4.jpg?width=400&height=300',
            img7: 'https://img2.carmax.com/assets/24325520/image/5.jpg?width=400&height=300',
            img8: 'https://img2.carmax.com/assets/24325520/image/6.jpg?width=400&height=300',
            img9: 'https://img2.carmax.com/assets/24325520/image/7.jpg?width=400&height=300',
            img10: 'https://img2.carmax.com/assets/24325520/image/8.jpg?width=400&height=300',
            img11: 'https://img2.carmax.com/assets/24325520/image/16.jpg?width=400&height=300',
            img12: 'https://img2.carmax.com/assets/24325520/image/10.jpg?width=400&height=300',
            img13: 'https://img2.carmax.com/assets/24325520/image/11.jpg?width=400&height=300',
            img14: 'https://img2.carmax.com/assets/24325520/image/12.jpg?width=400&height=300',
            img15: 'https://img2.carmax.com/assets/24325520/image/21.jpg?width=400&height=300',
        },

    },
    {
        _id: '4',
        make: 'bmw',
        year: '2019',
        model: 'BMW X1 XDrive28i',
        bodyTyle: 'Sedan',
        fuelType: 'Gas',
        price: '19.998',
        transmision: 'automatic',
        images: {
            img: 'https://img2.carmax.com/assets/24510667/image/hero.jpg?width=800&height=450',
            img2: 'https://img2.carmax.com/assets/24510667/image/8.jpg?width=400&height=300',
            img3: 'https://img2.carmax.com/assets/24510667/image/1.jpg?width=400&height=300',
            img4: 'https://img2.carmax.com/assets/24510667/image/3.jpg?width=400&height=300',
            img5: 'https://img2.carmax.com/assets/24510667/image/2.jpg?width=400&height=300',
            img6: 'https://img2.carmax.com/assets/24510667/image/4.jpg?width=400&height=300',
            img7: 'https://img2.carmax.com/assets/24510667/image/5.jpg?width=400&height=300',
            img8: 'https://img2.carmax.com/assets/24510667/image/6.jpg?width=400&height=300',
            img9: 'https://img2.carmax.com/assets/24510667/image/7.jpg?width=400&height=300',
            img10: 'https://img2.carmax.com/assets/24510667/image/8.jpg?width=400&height=300',
            img11: 'https://img2.carmax.com/assets/24510667/image/16.jpg?width=400&height=300',
            img12: 'https://img2.carmax.com/assets/24510667/image/10.jpg?width=400&height=300',
            img13: 'https://img2.carmax.com/assets/24510667/image/11.jpg?width=400&height=300',
            img14: 'https://img2.carmax.com/assets/24510667/image/12.jpg?width=400&height=300',
            img15: 'https://img2.carmax.com/assets/24510667/image/21.jpg?width=400&height=300',
        },

    },
]



export default carData