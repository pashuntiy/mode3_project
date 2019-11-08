guns = Category.create(name: 'Guns')
shotgun = Product.create(name: 'Shotgun', description: "Pump Action", image: "https://content.osgnetworks.tv/shootingtimes/content/photos/New-Shotguns-2019-770.jpg", origin: 'America', cost: 100, average_rating: 0, category_id: guns.id)
rocket_launcher = Product.create(name: 'Rocket Launcher', description: "Explosive", image: "https://i.dailymail.co.uk/i/pix/2013/03/21/article-2296888-18D515C1000005DC-845_634x392.jpg", origin: 'Morocco', cost: 1500, average_rating: 0, category_id: guns.id)
pistol = Product.create(name: 'Pistol', description: "Handgun", image: "https://cdn11.bigcommerce.com/s-admq3scrtq/images/stencil/500x659/products/7039/15885/F1SWMOD6906sq1__30937.1551474222.jpg?c=2", origin: 'Morocco', cost: 45, average_rating: 0, category_id: guns.id)
ar15 = Product.create(name: "Assault Rifle", description: "Automatic", image: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw1c759f22/large/93836.jpg?sw=800&sh=800", origin: 'Morocco', cost: 170, average_rating: 0, category_id: guns.id)


organs = Category.create(name: "Organs")
heart = Product.create(name: "Heart", description: "Pumps blood", image: "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/sn-pigheart.jpg?itok=mFsvY_GJ", origin: "Africa", cost: 3000, average_rating: 0, category_id: organs.id)
lungs = Product.create(name: "Lungs", description: "Needed to breath", image: "https://i.pinimg.com/originals/ec/23/0e/ec230ea865db5cb7c07c43a6694e2c32.jpg", origin: "Asia", cost: 2800, average_rating: 0, category_id: organs.id)
eyes = Product.create(name: "Eyes", description: "For seeing", image: "http://4.bp.blogspot.com/-tcjwh3Xreuo/UfptA_eiWpI/AAAAAAAAAlA/ByWGVXKYRmQ/s1600/eyeball.JPG", origin: "The Bronx", cost: 50, average_rating: 0, category_id: organs.id)
liver = Product.create(name: "Liver", description: "Removes Toxins", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Leber_Schaf.jpg/220px-Leber_Schaf.jpg", origin: "South Africa", cost: 3400, average_rating: 0, category_id: organs.id)
kidney = Product.create(name: "Kidney", description: "Purifies blood", image: "http://resizer.shared.arcpublishing.com/G701UV1JE49Aa7yrZDams3pAR38=/arc-anglerfish-arc2-prod-bonnier/public/OIFVFSKT7QVBN3PODOGWEF3XQY.jpg", origin: "Peru", cost: 1200, average_rating: 0, category_id: organs.id)
spinal_fluids = Product.create(name: "Spinal Fluids", description: "Fluid for your spine", image: "http://simmaronresearch.com/wp-content/uploads/2013/06/693px-CSF.jpg", origin: "Flatiron", cost: 7500, average_rating: 0, category_id: organs.id)
jacky_face = Product.create(name: "Jacky Face", description: "Just Jacky's face", image: "https://i.imgur.com/zucVdwH.png", origin: "Flatiron", cost: 1, average_rating: 0, category_id: organs.id)

drugs = Category.create(name: "Drugs")
weed = Product.create(name: "Marijuana", description: "Gets you high", image: "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/3/c1/3c1da441-1ce9-504f-b7ef-ff194adc9fe7/5dc313fd44c36.image.jpg?resize=1200%2C799", origin: "Los Angeles", cost: 4000, average_rating: 0, category_id: drugs.id)
coke = Product.create(name: "Cocaine", description: "Makes you feel like Superman", image: "https://post.healthline.com/wp-content/uploads/2019/07/Cocaine_1200x628-facebook.jpg", origin: "Lower East Side of Manhattan", cost: 10000, average_rating: 0, category_id: drugs.id)
shrooms = Product.create(name: "Magic Mushrooms", description: "Moderate Tripping", image: "https://image.businessinsider.com/5c0566649405c949753f2d86?width=1100&format=jpeg&auto=webp", origin: "Arizona", cost: 100, average_rating: 0, category_id: drugs.id)
peyote = Product.create(name: "Peyote", description: "Medium Tripping", image: "https://drugfree.org/wp-content/uploads/2017/02/peyote.jpg", origin: "New Mexico", cost: 250, average_rating: 0, category_id: drugs.id)
acid = Product.create(name: "LSD", description: "Major Tripping", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/26/14/lsdtabs.jpg?w968h681", origin: "Switzerland", cost: 200, average_rating: 0, category_id: drugs.id)


animals = Category.create(name: "Animals")
panda = Product.create(name: "Panda", description: "Black and White Bear", image: "https://cbsnews1.cbsistatic.com/hub/i/2016/08/26/cdf56aa8-1f2a-4d44-8cac-ab5993ee7d18/gettyimages-594359398.jpg", origin: "China", cost: 250000, average_rating: 0, category_id: animals.id)
elephant = Product.create(name: "Elephant", description: "Big Ass Mammal", image: "https://d3i6fh83elv35t.cloudfront.net/static/2019/05/2018-04-30T085934Z_559402055_RC158EBB8C50_RTRMADP_3_BRITAIN-ROYALS-BOTSWANA-1024x683.jpg", origin: "Africa", cost: 400000, average_rating: 0, category_id: animals.id)
dragon = Product.create(name: "Dragon", description: "Fire Breathing Giant Lizard", image: "https://d.newsweek.com/en/full/1391245/drogon-game-thrones-season-8-dragons-daenerys.webp?w=737&f=fba0333dcdd9278147b59f9575b34fad", origin: "Esteros", cost: 3500000, average_rating: 0, category_id: animals.id)
jacky = Product.create(name: "Jacky", description: "Very Intelligent Man", image: "https://i.imgur.com/zucVdwH.png", origin: "Queens", cost: 170000, average_rating: 0, category_id: animals.id)