
/*
    View chỉ ap dụng data có dạng 3 phân cấp: F1 -> F2 -> F3 -> Products

    Properties:
        typeShow: loại hiển thị danh mục theo layout. Nếu typeShow = 3 thì children sẽ là id theo bảng products
*/
export const dataProducts = [
    {
        id:'1',
        idParent: '18',
        name: 'Desoto Sofa',
        slug:'desoto-sofa',
        price: 12000,
        sale: '3000',
        url:'products1.jpg',
        provider: '',
    },
    {
        id:'2',
        idParent: '18',
        name: 'Cotoro Sofa',
        slug:'cotoro-sofa',
        price: 10000,
        sale: '50',
        url:'products2.jpg',
        provider: '',
    },
    {
        id:'3',
        idParent: '18',
        name: 'Dania Sofa',
        slug:'dania-sofa',
        price: 15000,
        sale: '',
        url:'products3.jpg',
        provider: '',
    }
    ,{
        id:'4',
        idParent: '18',
        name: 'Kaito Sofa',
        slug:'kaito-sofa',
        price: 90000,
        sale: '',
        url:'products4.jpg',
        provider: '',
    },
    {
        id:'5',
        idParent: '18',
        name: 'Desoto Sofa',
        slug:'desoto-sofa',
        price: 12000,
        sale: '30',
        url:'products1.jpg',
        provider: '',
    },
    {
        id:'6',
        idParent: '18',
        name:'Cotoro Sofa',
        slug:'cotoro-sofa',
        price: 10000,
        sale: '50',
        url:'products2.jpg',
        provider: '',
    },
    {
        id:'7',
        idParent: '18',
        name: 'Dania Sofa',
        slug:'dania-sofa',
        price: 15000,
        sale: '',
        url:'products3.jpg',
        provider: '',
    }
    ,{
        id:'8',
        idParent: '18',
        slug:'kaito-sofa',
        price: 90000,
        sale: '',
        url:'products4.jpg',
        provider: '',
    }
]

export const dataCategories = [
    // Cha
    {
        id: '1',
        name: 'Furniture',
        slug:'furniture',
        url: 'cate1.jpg',
        breadcrumb: [],
        parent: [],
        children: ['7','8','9','10','11'],
        typeShow:0, 
    },
    {
        id:'2',
        name: 'Kitchen & Dining',
        slug:'kitchen-dining',
        url: 'cate2.jpg',
        breadcrumb: [],
        parent: [],
        children: [],
        typeShow:0, 
    },
    {
        id:'3',
        name: 'Bath',
        url: 'cate3.jpg',
        slug:'bath',
        breadcrumb: [],
        parent: [],
        children: [],
        typeShow:1, 
    },
    {
        id:'4',
        name: 'Lighting',
        url: 'cate1.jpg',
        slug:'ligting',
        breadcrumb: [],
        parent: [],
        children: ['12'],
        typeShow:1, 
    },
    {
        id:'5',
        name: 'Living',
        url: 'cate2.jpg',
        slug:'living',
        breadcrumb: [],
        parent: [],
        children: ['12','13','14','15','16','17'],
        typeShow:1, 
    },
    {
        id:'6',
        name: 'Bedroom',
        url: 'cate3.jpg',
        slug:'bedroom',
        breadcrumb: [],
        parent: [],
        children: [],
        typeShow:1, 
    },
    // Con
    {
        id: '7',
        name: 'Living Room Furniture',
        slug: 'luving-room-furniture',
        breadcrumb: ['1'],
        parent: ['1'],
        children: ['12','112','13','14','15','16','17'],
        typeShow:2, 
    },
    {
        id: '8',
        name: 'Kitchen & Dining Furniture',
        slug:'kitchen-dining-furniture',
        breadcrumb: ['1'],
        parent: ['1'],
        children: [],
        typeShow:2, 
    },
    {
        id: '9',
        name: 'Bedroom Furniture',
        slug: 'bedroom-furniture',
        breadcrumb: ['1'],
        parent: ['1'],
        children: [],
        typeShow:2, 
    },
    {
        id: '10',
        name: 'Outdoor Furniture',
        slug: 'outdoor-furniture',
        breadcrumb: ['1'],
        parent: ['1'],
        children: [],
        typeShow:2, 
    },
    {
        id: '11',
        name: 'Home Office Furniture',
        slug: 'home-office-furniture',
        breadcrumb: ['1'],
        parent: ['1'],
        children: [],
        typeShow:2, 
    },
    {
        id:'12',
        name: 'Sofas & Sectionals',
        url: 'productsPosition1.jpg',
        slug: 'sofas-sectionals',
        breadcrumb: ['5'],
        parent: ['7','5'],
        children: ['18','19','20','21','22','23'],
        typeShow:2, 
    },
    {
        id:'112',
        name: 'Home Decor',
        url: 'productsPosition2.jpg',
        slug: 'home-decor',
        breadcrumb: ['7'],
        parent: ['7'],
        children: [],
        typeShow:2, 
    },
  
    {
        id:'13',
        url: 'productsPosition2.jpg',
        name: 'Coffee & Accent Table',
        slug: 'coffee-accent-table',
        breadcrumb: ['5'],
        parent: ['7','5'],
        children: [],
        typeShow:2, 
    },
    {
        id:'14',
        url: 'ProductsPosition3.jpg',
        name: 'Chairs',
        slug: 'chairs',
        breadcrumb: ['5'],
        parent: ['7','5'],
        children: [],
        typeShow:2, 
    },
    {
        id:'15',
        url: 'productsPosition1.jpg',
        name: 'Media Storage',
        slug: 'media-storage',
        breadcrumb: ['5'],
        parent: ['7','5'],
        children: [],
        typeShow:2, 
    },
    {
        id:'16',
        url: 'productsPosition2.jpg',
        name: 'Bookcases',
        slug: 'bookcases',
        breadcrumb: ['5'],
        parent: ['7','5'],
        children: [],
        typeShow:2, 
    },
    {
        id:'17',
        url: 'productsPosition3.jpg',
        name: 'Footstools & Ottomans',
        slug: 'chairs', 
        breadcrumb: ['5'],
        parent: ['7','5'],
        children: [],
        typeShow:2, 
    },
    {
        id:'18',
        url: 'cate3-1.jpg',
        name: 'Sofas',
        slug: 'sofas', 
        breadcrumb: ['5','12'],
        parent: ['12'],
        children: ['1','2','3','4','5','6','7','8'],
        typeShow:3, 
    },
    {
        id:'19',
        url: 'cate3-2.jpg',
        name: 'Sectional Sofas',
        slug: 'sectional-sofas', 
        breadcrumb: ['12'],
        parent: ['12'],
        children: [],
        typeShow:3, 
    },
    {
        id:'20',
        url: 'cate3-3.jpg',
        name: 'Love Seat',
        slug: 'love-seat', 
        breadcrumb: ['12'],
        parent: ['12'],
        children: [],
        typeShow:3, 
    },
    {
        id:'21',
        url: 'cate3-4.jpg',
        name: 'Futons and Accessories',
        slug: 'futons-and-accessories', 
        breadcrumb: ['12'],
        parent: ['12'],
        children: [],
        typeShow:3, 
    },
    {
        id:'22',
        url: 'cate3-5.jpg',
        name: 'Sleeper Sofas',
        slug: 'sleeper-sofas', 
        breadcrumb: ['12'],
        parent: ['12'],
        children: [],
        typeShow:3, 
    },
    {
        id:'23',
        url: 'cate3-6.jpg',
        name: 'Living Room Furniture Seat',
        slug: 'living-room-furniture-seat', 
        breadcrumb: ['12'],
        parent: ['12'],
        children: [],
        typeShow:3, 
    }
]


// danh cho photos
export const dataPhotoCatories = [
    {
        id:'1',
        name:'Kitchen',
        url:'photos1.jpg'
    },
    {
        id:'2',
        name:'Bath',
        url:'photos2.jpg'
    },
    {
        id:'3',
        name:'Bedroom',
        url:'photos3.jpg'
    },
    {
        id:'4',
        name:'Living',
        url:'photos4.jpg'
    },
    {
        id:'5',
        name:'Dining',
        url:'photos1.jpg'
    },
    {
        id:'6',
        name:'Outdoor',
        url:'photos2.jpg'
    },
    {
        id:'7',
        name:'Baby Kid',
        url:'photos3.jpg'
    },
    {
        id:'8',
        name:'Home Office',
        url:'photos4.jpg'
    }
]
export const dataProductPhotos = [
    {
        id:'1',
        name:'Master Bathroom',
        slug:'master-bathroom',
        url:'PhotoProduct1.jpg',
        images: ["PhotoProduct2.jpg","PhotoProduct3.jpg","PhotoProduct2.jpg","PhotoProduct1.jpg"]
    },
    {
        id:'2',
        name:'Hamstons Summer Home',
        slug:'hamstons-summer-home',
        url:'PhotoProduct2.jpg',
        images: ["PhotoProduct2.jpg","PhotoProduct3.jpg","PhotoProduct2.jpg","PhotoProduct1.jpg"]
    },
    {
        id:'3',
        name:'Marietta Modern Farmhouse',
        slug:'marietta-modern-farmhouse',
        url:'PhotoProduct3.jpg',
        images: ["PhotoProduct2.jpg","PhotoProduct3.jpg","PhotoProduct2.jpg","PhotoProduct1.jpg"]
    },
]