import React from "react";

function AlgorithmsDescription(){

    return (
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            <div className="mb-8 border border-gray-300 shadow-lg rounded-lg p-6">
                <label className="block text-lg font-semibold mb-2 text-blue-700">Logistic Regression:</label>
                <p className="text-gray-700">This model achieved an accuracy of 90.74%. Logistic Regression is a statistical method used for binary classification, where the output is a probability value indicating the likelihood of a given input belonging to a certain class.</p>
            </div>
            <div className="mb-8 border border-gray-300 shadow-lg rounded-lg p-6">
                <label className="block text-lg font-semibold mb-2 text-blue-700">Decision Tree:</label>
                <p className="text-gray-700">This model achieved an accuracy of 70.37%. Decision Trees are a non-parametric supervised learning method used for classification and regression tasks. They partition the feature space into a set of simple decision rules.</p>
            </div>
                <div className="mb-8 border border-gray-300 shadow-lg rounded-lg p-6">
                    <label className="block text-lg font-semibold mb-2 text-blue-700">Random Forest:</label>
                    <p className="text-gray-700">This model achieved an accuracy of 88.89%. Random Forest is an ensemble learning method that constructs a multitude of decision trees during training and outputs the class that is the mode of the classes of the individual trees.</p>
                </div>
                <div className="mb-8 border border-gray-300 shadow-lg rounded-lg p-6">
                    <label className="block text-lg font-semibold mb-2 text-blue-700">Support Vector Machines (SVM):</label>
                    <p className="text-gray-700">This model achieved an accuracy of 62.96%. SVM is a powerful supervised learning algorithm used for classification tasks. It finds the hyperplane that best separates the classes in the feature space.</p>
                </div>
                <div className="mb-8 border border-gray-300 shadow-lg rounded-lg p-6">
                    <label className="block text-lg font-semibold mb-2 text-blue-700">K-Nearest Neighbors (KNN):</label>
                    <p className="text-gray-700">This model achieved an accuracy of 64.81%. KNN is a simple, easy-to-understand algorithm that stores all available cases and classifies new cases based on a similarity measure (e.g., distance functions).</p>
                </div>
                <div className="mb-8 border border-gray-300 shadow-lg rounded-lg p-6">
                    <label className="block text-lg font-semibold mb-2 text-blue-700">Naive Bayes:</label>
                    <p className="text-gray-700">This model achieved an accuracy of 90.74%. Naive Bayes is a probabilistic classifier based on applying Bayes' theorem with strong (naive) independence assumptions between the features.</p>
                </div>
                <div className="mb-8 border border-gray-300 shadow-lg rounded-lg p-6">
                    <label className="block text-lg font-semibold mb-2 text-blue-700">Gradient Boosting Machines:</label>
                    <p className="text-gray-700">This model achieved an accuracy of 74.07%. Gradient Boosting is a machine learning technique for regression and classification problems that builds models in a stage-wise manner and optimizes them using gradient descent.</p>
                </div>
                <div className="mb-8 border border-gray-300 shadow-lg rounded-lg p-6">
                    <label className="block text-lg font-semibold mb-2 text-blue-700">AdaBoost:</label>
                    <p className="text-gray-700">This model achieved an accuracy of 88.89%. AdaBoost (Adaptive Boosting) is an ensemble learning method that combines multiple weak classifiers to build a strong classifier.</p>
                </div>
            </div>
        </div>
    );
}

export default AlgorithmsDescription;
