import { Form, Input, Button, Select } from 'antd';
import { useState } from 'react';

const { Option } = Select;
const { TextArea } = Input;

const TranslationForm = () => {
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('es');
    const [sourceText, setSourceText] = useState('');

    const handleSourceLanguageChange = (value: string) => {
        setSourceLanguage(value);
    };

    const handleTargetLanguageChange = (value: string) => {
        setTargetLanguage(value);
    };

    const handleSourceTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSourceText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Translating from ${sourceLanguage} to ${targetLanguage}: ${sourceText}`);
        // Add your translation logic here
    };

    return (
        <>
        
        
        <Form
            name="translation_form"
            onFinish={handleSubmit}
            layout="vertical"
            initialValues={{ remember: true }}
            className='mx-auto max-w-2xl p-4 rounded-lg shadow-lg mt-40 z-10'
        >
            <Form.Item
                label="Source Language"
                name="source_language"
                rules={[{ required: true, message: 'Please select the source language!' }]}
            >
                <Select value={sourceLanguage} onChange={handleSourceLanguageChange}>
                    <Option value="en">English</Option>
                    <Option value="es">Spanish</Option>
                    <Option value="fr">French</Option>
                    <Option value="de">German</Option>
                    <Option value="it">Italian</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Target Language"
                name="target_language"
                rules={[{ required: true, message: 'Please select the target language!' }]}
            >
                <Select value={targetLanguage} onChange={handleTargetLanguageChange}>
                    <Option value="en">English</Option>
                    <Option value="es">Spanish</Option>
                    <Option value="fr">French</Option>
                    <Option value="de">German</Option>
                    <Option value="it">Italian</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Source Text"
                name="source_text"
                rules={[{ required: true, message: 'Please input the source text!' }]}
            >
                
                <TextArea
                showCount
                maxLength={500}
                style={{ height: 120, marginBottom: 24, color: 'white' }}
                //   onChange={onChange}
                placeholder="can resize"
                />
    
            </Form.Item>

            <Form.Item>
                <Button type="primary" style={{backgroundColor:'#00b96b'}} htmlType="submit" >
                    Translate
                </Button>
                
            </Form.Item>
        </Form>
        </>
    );
};

export default TranslationForm;
