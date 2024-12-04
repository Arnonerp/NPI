require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
        // Example write operation
        const TestSchema = new mongoose.Schema({ name: String });
        const TestModel = mongoose.model('Test', TestSchema);
        await TestModel.create({ name: 'Test Entry' });
        console.log('Test entry added to the NPI database.');
        process.exit();
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

connectDB();
