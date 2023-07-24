import React from 'react';

const InterviewQA = () => {
    return (
        <div>
            <div className='lg:w-10/12 mx-auto my-10'>
                <div >
                    <p className='my-6'><strong className='text-xl leading-8 text-white bg-[#60A5FA] px-5 py-2 rounded-md mr-2'>1. Question:</strong><strong className='text-xl leading-8'>How does React work?</strong></p>
                    <p><strong className='text-xl leading-8 border-b-2 border-[#60A5FA] px-2 py-1 rounded-md mr-2'>Answer:</strong><span className='text-lg'>Virtual DOM is created by react. First it runs a “diffing” algorithm, whenever there is a state change in a component. Second one is reconciliation, here it updates the DOM with the result of diff.</span></p>
                </div>
                <div>
                    <p className='my-6'><strong className='text-xl leading-8 text-white bg-[#60A5FA] px-5 py-2 rounded-md mr-2'>2. Question:</strong><strong className='text-xl leading-8'>What is a ReactDOM?</strong></p>
                    <p><strong className='text-xl leading-8 border-b-2 border-[#60A5FA] px-2 py-1 rounded-md mr-2'>Answer:</strong><span className='text-lg'>By using ReactDOM render method it renders a react element into the DOM. It is the top level React API.</span></p>
                </div>
                <div>
                    <p className='my-6'><strong className='text-xl leading-8 text-white bg-[#60A5FA] px-5 py-2 rounded-md mr-2'>3. Question:</strong><strong className='text-xl leading-8'>What are React Hooks?</strong></p>
                    <p><strong className='text-xl leading-8 border-b-2 border-[#60A5FA] px-2 py-1 rounded-md mr-2'>Answer:</strong><span className='text-lg'>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.</span></p>
                </div>
                <div>
                    <p className='my-6'><strong className='text-xl leading-8 text-white bg-[#60A5FA] px-5 py-2 rounded-md mr-2'>4. Question:</strong><strong className='text-xl leading-8 '>What do you mean by Asynchronous API?</strong></p>
                    <p><strong className='text-xl leading-8 border-b-2 border-[#60A5FA] px-2 py-1 rounded-md mr-2'>Answer:</strong><span className='text-lg'>All APIs of Node.js library are aynchronous that is non-blocking. It essentially means a Node.js based server never waits for a API to return data. Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call.</span></p>
                </div>
                <div>
                    <p className='my-6'><strong className='text-xl leading-8 text-white bg-[#60A5FA] px-5 py-2 rounded-md mr-2'>5. Question:</strong><strong className='text-xl leading-8'>What is Sharding in MongoDB?</strong></p>
                    <p><strong className='text-xl leading-8 border-b-2 border-[#60A5FA] px-2 py-1 rounded-md mr-2'>Answer:</strong><span className='text-lg'>Sharding is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations. MongoDB supports horizontal scaling through sharding. MongoDB shards data at the collection level, distributing the collection data across the shards in the cluster.</span></p>
                </div>
                <div>
                    <p className='my-6'><strong className='text-xl leading-8 text-white bg-[#60A5FA] px-5 py-2 rounded-md mr-2'>6. Question:</strong><strong className='text-xl leading-8'>How does Node.js handle Child Threads?</strong></p>
                    <p><strong className='text-xl leading-8 border-b-2 border-[#60A5FA] px-2 py-1 rounded-md mr-2'>Answer:</strong><span className='text-lg'>Node.js, in its essence, is a single thread process. It does not expose child threads and thread management methods to the developer. js does spawn child threads for certain tasks such as asynchronous I/O, but these run behind the scenes and do not execute any application JavaScript code, nor block the main event loop.</span></p>
                </div>
                <div>
                    <p className='my-6'><strong className='text-xl leading-8 text-white bg-[#60A5FA] px-5 py-2 rounded-md mr-2'>7. Question:</strong><strong className='text-xl leading-8'>What is middleware?</strong></p>
                    <p><strong className='text-xl leading-8 border-b-2 border-[#60A5FA] px-2 py-1 rounded-md mr-2'>Answer:</strong><span className='text-lg'>Middleware is software that different applications use to communicate with each other. It provides functionality to connect applications intelligently and efficiently so that you can innovate faster. Middleware acts as a bridge between diverse technologies, tools, and databases so that you can integrate them seamlessly into a single system.</span></p>
                </div>
                <div>
                    <p className='my-6'><strong className='text-xl leading-8 text-white bg-[#60A5FA] px-5 py-2 rounded-md mr-2'>8. Question:</strong><strong className='text-xl leading-8'>What do you use node js for backend?</strong></p>
                    <p><strong className='text-xl leading-8 border-b-2 border-[#60A5FA] px-2 py-1 rounded-md mr-2'>Answer:</strong><span className='text-lg'>NodeJS is an event-driven JavaScript runtime built on Chrome's V8 engine that is used to build traditional and scalable server-side web applications and back-end APIs (Application Program Interfaces).</span></p>
                </div>
                <div>
                    <p className='my-6'><strong className='text-xl leading-8 text-white bg-[#60A5FA] px-5 py-2 rounded-md mr-2'>9. Question:</strong><strong className='text-xl leading-8'>How to add data to MongoDB node?</strong></p>
                    <p><strong className='text-xl leading-8 border-b-2 border-[#60A5FA] px-2 py-1 rounded-md mr-2'>Answer:</strong><span className='text-lg'>To insert a record, or document as it is called in MongoDB, into a collection, we use the insertOne() method. The first parameter of the insertOne() method is an object containing the name(s) and value(s) of each field in the document you want to insert.</span></p>
                </div>
                <div>
                    <p className='my-6'><strong className='text-xl leading-8 text-white bg-[#60A5FA] px-5 py-2 rounded-md mr-2'>10. Question:</strong><strong className='text-xl leading-8'>What type of database is mongodb?</strong></p>
                    <p><strong className='text-xl leading-8 border-b-2 border-[#60A5FA] px-2 py-1 rounded-md mr-2'>Answer:</strong><span className='text-lg'>MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs.</span></p>
                </div>
            </div>
        </div>
    );
};

export default InterviewQA;