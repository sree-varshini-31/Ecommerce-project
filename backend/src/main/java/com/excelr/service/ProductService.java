package com.excelr.service;

import com.excelr.entity.Product;
import com.excelr.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category.toLowerCase());
    }

    // ✔ Bulk insert method
    public List<Product> addProducts(List<Product> products) {
        return productRepository.saveAll(products);
    }
    public void deleteAllProducts() {
        productRepository.deleteAll();
    }

}
