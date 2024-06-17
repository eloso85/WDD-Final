import Image from 'next/image';

const services = [
    {
      id: 1,
      name: 'Basic',
      price: '$99/month',
      image: '/path/to/basic-service.jpg', // Replace with your image path
      benefits: ['Feature A', 'Feature B', 'Feature C']
    },
    {
      id: 2,
      name: 'Standard',
      price: '$199/month',
      image: '/path/to/standard-service.jpg', // Replace with your image path
      benefits: ['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E']
    },
    {
      id: 3,
      name: 'Premium',
      price: '$299/month',
      image: '/path/to/premium-service.jpg', // Replace with your image path
      benefits: ['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E', 'Feature F', 'Feature G']
    }
  ];

const ServiceCard = ({ service }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        {/* <Image src={service.image} alt={`${service.name} Service`} width={300} height={200} layout="responsive" /> */}
        <div className="card-body">
          <h5 className="card-title">{service.name}</h5>
          <p className="card-text">{service.price}</p>
          <ul className="list-unstyled">
            {service.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServiceSelector = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSelector;
