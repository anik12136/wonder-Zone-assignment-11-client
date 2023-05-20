import React from 'react';

const Gallery = () => {
    return (
        <div>
            {/* <div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="relative group">
                        <img src="https://img.freepik.com/free-vector/cartoon-bumper-car-white-background_1308-107382.jpg?w=996&t=st=1684446005~exp=1684446605~hmac=6ab459c310f716004fe6dc622089d5ec5948445452310c9be425132186baae22.jpg" alt="Photo 1" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="https://img.freepik.com/free-vector/cartoon-bumper-car-white-background_1308-107382.jpg?w=996&t=st=1684446005~exp=1684446605~hmac=6ab459c310f716004fe6dc622089d5ec5948445452310c9be425132186baae22" alt="Photo 2" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="photo2.jpg" alt="Photo 2" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="photo2.jpg" alt="Photo 2" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="photo1.jpg" alt="Photo 1" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="photo2.jpg" alt="Photo 2" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="photo2.jpg" alt="Photo 2" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="photo2.jpg" alt="Photo 2" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="photo1.jpg" alt="Photo 1" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="photo2.jpg" alt="Photo 2" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="photo2.jpg" alt="Photo 2" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="relative group">
                        <img src="photo2.jpg" alt="Photo 2" className="w-full h-auto transition-transform duration-300 transform hover:scale-105" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>

                </div>

            </div> */}

            <div className="grid grid-cols-3 gap-4">
                <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src="https://as1.ftcdn.net/v2/jpg/04/74/18/14/1000_F_474181453_AnHPZiaI3Pu4YiSHCSb4hG9LIaGDQMqB.jpg" alt="Photo 1" className="w-full h-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">Photo 1</h3>
                    </div>
                </div>
                <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src="img.freepik.com/free-vector/cartoon-bumper-car-white-background_1308-107382.jpg?w=996&t=st=1684446005~exp=1684446605~hmac=6ab459c310f716004fe6dc622089d5ec5948445452310c9be425132186baae22" alt="Photo 2" className="w-full h-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">Photo 2</h3>
                    </div>
                </div>
                <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src="https://as1.ftcdn.net/v2/jpg/05/23/34/58/1000_F_523345881_o8zctKuDF4jlWuTfGORUe0qzPYS0EzVk.jpg" alt="Photo 1" className="w-full h-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">Photo 1</h3>
                    </div>
                </div>
                <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src="https://as2.ftcdn.net/v2/jpg/00/45/09/57/1000_F_45095752_hje2yKkRcAA0ZmDMK3Yt48GJ1JNHLzUs.jpg" alt="Photo 2" className="w-full h-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">Photo 2</h3>
                    </div>
                </div>
                <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src="https://as1.ftcdn.net/v2/jpg/04/74/18/14/1000_F_474181453_AnHPZiaI3Pu4YiSHCSb4hG9LIaGDQMqB.jpg" alt="Photo 1" className="w-full h-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">Photo 1</h3>
                    </div>
                </div>
                <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src="https://img.freepik.com/premium-photo/dump-truck-toy-downloading-colorful-blocks-isolated-white_470606-620.jpg?w=996" alt="Photo 2" className="w-full h-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">Photo 2</h3>
                    </div>
                </div>
                <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src="https://as1.ftcdn.net/v2/jpg/04/74/18/14/1000_F_474181453_AnHPZiaI3Pu4YiSHCSb4hG9LIaGDQMqB.jpg" alt="Photo 1" className="w-full h-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">Photo 1</h3>
                    </div>
                </div>
                <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src="photo2.jpg" alt="Photo 2" className="w-full h-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">Photo 2</h3>
                    </div>
                </div>
                <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src="https://as1.ftcdn.net/v2/jpg/04/74/18/14/1000_F_474181453_AnHPZiaI3Pu4YiSHCSb4hG9LIaGDQMqB.jpg" alt="Photo 1" className="w-full h-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">Photo 1</h3>
                    </div>
                </div>
                <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <img src="photo2.jpg" alt="Photo 2" className="w-full h-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">Photo 2</h3>
                    </div>
                </div>


            </div>


        </div>

    );
};

export default Gallery;